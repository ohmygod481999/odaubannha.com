import React from "react";

function Promotion() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 wow animated slideInDown">
            <div className="main-title w-50 mx-auto d-table text-center mb-30">
              <span className="small-title color-primary position-relative line-2-primary">
                Explore
              </span>
              <h2 className="title mb-20 color-secondary">Promotion</h2>
              <span className="sub-title">
                Sociis eget dui hendrerit urna felis euismod viverra. Inceptos
                habitasse augue quisque facilisis per. Nibh justo massa
                suscipit.
              </span>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="owl-carousel neighborhoodss owl-dots-none mt-30 owl-loaded owl-drag">
              <div className="neighborhoods-thumbnail wow animated slideInDown">
                <a href="#">
                  <img src="images/explore/1.jpg" alt="images" />
                </a>
                <h6 className="place-name py-5 px-30 bg-secondary position-absolute color-white">
                  Brooklyn
                </h6>
                <div className="bg-secondary py-10 px-20 color-white icon-primary d-table w-100">
                  <ul>
                    <li>
                      <span className="mr-5">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </span>{" "}
                      Listings : 92
                    </li>
                    <li>
                      <span className="mr-5">
                        <i className="fa fa-usd" aria-hidden="true" />
                      </span>{" "}
                      Price : $1200 - $50000
                    </li>
                  </ul>
                </div>
              </div>
              <div className="neighborhoods-thumbnail wow animated slideInDown">
                <a href="#">
                  <img src="images/explore/2.jpg" alt="images" />
                </a>
                <h6 className="place-name py-5 px-30 bg-secondary position-absolute color-white">
                  Washington
                </h6>
                <div className="bg-secondary py-10 px-20 color-white icon-primary d-table w-100">
                  <ul>
                    <li>
                      <span className="mr-5">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </span>{" "}
                      Listings : 95
                    </li>
                    <li>
                      <span className="mr-5">
                        <i className="fa fa-usd" aria-hidden="true" />
                      </span>{" "}
                      Price : $1500 - $99999
                    </li>
                  </ul>
                </div>
              </div>
              <div className="neighborhoods-thumbnail wow animated slideInDown">
                <a href="#">
                  <img src="images/explore/3.jpg" alt="images" />
                </a>
                <h6 className="place-name py-5 px-30 bg-secondary position-absolute color-white">
                  Cincinnati
                </h6>
                <div className="bg-secondary py-10 px-20 color-white icon-primary d-table w-100">
                  <ul>
                    <li>
                      <span className="mr-5">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </span>{" "}
                      Listings : 82
                    </li>
                    <li>
                      <span className="mr-5">
                        <i className="fa fa-usd" aria-hidden="true" />
                      </span>{" "}
                      Price : $1000 - $30000
                    </li>
                  </ul>
                </div>
              </div>
              <div className="neighborhoods-thumbnail">
                <a href="#">
                  <img src="images/explore/4.jpg" alt="images" />
                </a>
                <h6 className="place-name py-5 px-30 bg-secondary position-absolute color-white">
                  Maxico
                </h6>
                <div className="bg-secondary py-10 px-20 color-white icon-primary d-table w-100">
                  <ul>
                    <li>
                      <span className="mr-5">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </span>{" "}
                      Listings : 75
                    </li>
                    <li>
                      <span className="mr-5">
                        <i className="fa fa-usd" aria-hidden="true" />
                      </span>{" "}
                      Price : $1500 - $75000
                    </li>
                  </ul>
                </div>
              </div>
              <div className="neighborhoods-thumbnail">
                <a href="#">
                  <img src="images/explore/5.jpg" alt="images" />
                </a>
                <h6 className="place-name py-5 px-30 bg-secondary position-absolute color-white">
                  Rochester
                </h6>
                <div className="bg-secondary py-10 px-20 color-white icon-primary d-table w-100">
                  <ul>
                    <li>
                      <span className="mr-5">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </span>{" "}
                      Listings : 56
                    </li>
                    <li>
                      <span className="mr-5">
                        <i className="fa fa-usd" aria-hidden="true" />
                      </span>{" "}
                      Price : $1200 - $50000
                    </li>
                  </ul>
                </div>
              </div>
              <div className="neighborhoods-thumbnail">
                <a href="#">
                  <img src="images/explore/6.jpg" alt="images" />
                </a>
                <h6 className="place-name py-5 px-30 bg-secondary position-absolute color-white">
                  Alabama
                </h6>
                <div className="bg-secondary py-10 px-20 color-white icon-primary d-table w-100">
                  <ul>
                    <li>
                      <span className="mr-5">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </span>{" "}
                      Listings : 73
                    </li>
                    <li>
                      <span className="mr-5">
                        <i className="fa fa-usd" aria-hidden="true" />
                      </span>{" "}
                      Price : $1000 - $70000
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotion;
