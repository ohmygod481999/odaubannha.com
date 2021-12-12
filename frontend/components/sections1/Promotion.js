import React from "react";
import { getStrapiImage } from "../../utils/medias";

function Promotion({ homePage }) {
    const { promotion } = homePage;
    const { subtitle, title, description, promotion_item } = promotion;
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 wow animated slideInUp">
                        <div className="main-title w-75 mx-auto d-table text-center mb-30">
                            <span className="small-title color-primary position-relative line-2-primary">
                                {subtitle}
                            </span>
                            <h2 className="title mb-20 color-secondary">
                                {title}
                            </h2>
                            <span className="sub-title">{description}</span>
                        </div>
                    </div>
                    {promotion_item.map((item) => {
                        const { url, description, title, price, address, image, labels } = item;
                        
                        return (
                            <div className="col-md-12 col-lg-6 wow animated slideInUp">
                                <div className="property-thumbnail mt-30">
                                    <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                                        <img
                                            src={getStrapiImage(image)}
                                            alt="image"
                                        />
                                        <div className="thumbnail-content z-index-1 color-white-a color-white">
                                          {labels? labels.split(",").map((label, i) => (
                                            <span className={`thum-category category-${i + 1} bg-secondary color-white z-index-1 px-15`}>
                                                {label}
                                            </span>
                                          )) : null}
                                            {/* <span className="thum-category category-2 bg-secondary color-white z-index-1 px-15">
                                                Featured
                                            </span> */}
                                            {/* <ul className="hover-option position-absolute icon-white z-index-1">
                                                <li>
                                                    <a
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Wishlist"
                                                        href="#"
                                                    >
                                                        <i
                                                            className="fa fa-heart-o"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Compare"
                                                        href="#"
                                                    >
                                                        <i
                                                            className="fa fa-random"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                            </ul> */}
                                            <div className="hover-content py-30 px-20 overlay-hover-gradient">
                                                <div className="thumbnail-title pb-10 z-index-1 position-relative">
                                                    <span className="thumbnail-price bg-white color-secondary px-15 mb-10 d-table">
                                                        {price}
                                                    </span>
                                                    <a
                                                        className="color-secondary mb-5"
                                                        href={url}
                                                    >
                                                        <h4>
                                                            {title}
                                                        </h4>
                                                    </a>
                                                    <span className="address icon-primary f-14">
                                                        <i className="fa fa-map-marker" />
                                                        {address}
                                                    </span>
                                                </div>
                                                <ul className="about-property icon-primary d-table f-14 z-index-1 position-relative">
                                                    {description}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 wow animated slideInDown">
                        <div className="main-title w-50 mx-auto d-table text-center mb-30">
                            <span className="small-title color-primary position-relative line-2-primary">
                                {subtitle}
                            </span>
                            <h2 className="title mb-20 color-secondary">
                                {title}
                            </h2>
                            <span className="sub-title">{description}</span>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <div className="owl-carousel neighborhoodss owl-dots-none mt-30 owl-loaded owl-drag">
                            {promotion_item.map((item) => {
                                const { url, description1, description2 } =
                                    item;
                                return (
                                    <div className="neighborhoods-thumbnail wow animated slideInDown">
                                        <a href={url}>
                                            <img
                                                src={getStrapiImage(item.image)}
                                                alt="images"
                                            />
                                        </a>
                                        <h6 className="place-name py-5 px-30 bg-secondary position-absolute color-white">
                                            {description1}
                                        </h6>
                                        <div className="bg-secondary py-10 px-20 color-white icon-primary d-table w-100">
                                            <ul>
                                                <li>
                                                    <span className="mr-5">
                                                        <i
                                                            className="fa fa-map-marker"
                                                            aria-hidden="true"
                                                        />
                                                    </span>{" "}
                                                    {item.address}
                                                </li>
                                                <li>
                                                    <span className="mr-5">
                                                        <i
                                                            className="fa fa-usd"
                                                            aria-hidden="true"
                                                        />
                                                    </span>{" "}
                                                    {description2}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                            {/* <div className="neighborhoods-thumbnail wow animated slideInDown">
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
              </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Promotion;
