import React from "react";

function About1({ homePage }) {
  const { title, description, mission, subtitle, value, vision } =
    homePage.aboutus;
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-6 wow animated slideInUp">
            <div className="side-title">
              <span className="small-title color-primary position-relative line-primary">
                {subtitle}
              </span>
              <h2 className="title mb-20 color-secondary">{title}</h2>
            </div>
          </div>
          <div className="col-md-12 col-lg-6 wow animated slideInUp">
            <div className="text-area">
              <p>{description}</p>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="property-looking mt-60">
              <div className="row">
                <div className="col-md-4 wow animated slideInDown mb-10">
                  <div className="text-thumbnail text-center bg-secondary py-40 px-30 mt-sm-30 color-white color-white-a">
                    <a className="mb-20" href="#">
                      <h4>{vision.title}</h4>
                    </a>
                    <p className="mb-20">{vision.description}</p>
                    <span className="d-block bg-primary icon-white flat-small">
                      <i className="flaticon-rental" />
                    </span>
                  </div>
                </div>
                <div className="col-md-4 wow animated slideInUp mb-10">
                  <div className="text-thumbnail text-center bg-secondary py-40 px-30 color-white color-white-a">
                    <a className="mb-20" href="#">
                      <h4>{value.title}</h4>
                    </a>
                    <p className="mb-20">{value.description}</p>
                    <span className="d-block bg-primary icon-white flat-small">
                      <i className="flaticon-house-2" />
                    </span>
                  </div>
                </div>
                <div className="col-md-4 wow animated slideInDown mb-10">
                  <div className="text-thumbnail text-center bg-secondary py-40 px-30  color-white color-white-a">
                    <a className="mb-20" href="#">
                      <h4>{mission.title}</h4>
                    </a>
                    <p className="mb-20">{mission.description}</p>
                    <span className="d-block bg-primary icon-white flat-small">
                      <i className="flaticon-rental" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About1;
