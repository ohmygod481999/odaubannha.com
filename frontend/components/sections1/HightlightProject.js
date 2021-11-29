import React from "react";
import { formatMoney } from "../../utils/common";
import { getStrapiImage } from "../../utils/medias";

function HightlightProject({ HightlightProject }) {
  const { highlight_project, products } = HightlightProject;
  const { title, subtitle, description } = highlight_project;
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 wow animated slideInUp">
            <div className="main-title w-75 mx-auto d-table text-center mb-30">
              <span className="small-title color-primary position-relative line-2-primary">
                {subtitle}
              </span>
              <h2 className="title mb-20 color-secondary">{title}</h2>
              <span className="sub-title">{description}</span>
            </div>
          </div>
          {products.map((project, i) => {
            return (
              <div
                key={project.id}
                className="col-md-12 col-lg-6 col-xl-4 wow animated slideInUp"
              >
                <div className="property-thumbnail mt-30">
                  <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                    <img src={getStrapiImage(project.image)} alt="image" />
                    <div className="thumbnail-content z-index-1 color-white-a color-white">
                      <span className="thum-category category-1 bg-secondary color-white z-index-1 px-15">
                        For Sale
                      </span>
                      <span className="thum-category category-2 bg-secondary color-white z-index-1 px-15">
                        Featured
                      </span>
                      <ul className="hover-option position-absolute icon-white z-index-1">
                        <li>
                          <a
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Wishlist"
                            href="#"
                          >
                            <i className="fa fa-heart-o" aria-hidden="true" />
                          </a>
                        </li>
                        <li>
                          <a
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                            href="#"
                          >
                            <i className="fa fa-random" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                      <div className="hover-content py-30 px-20 overlay-hover-gradient">
                        <div className="thumbnail-title z-index-1 position-relative">
                          <span className="thumbnail-price bg-white color-secondary px-15 mb-10 d-table">
                            {formatMoney(project.price.from) +
                              "-" +
                              formatMoney(project.price.to)}
                          </span>
                          <a
                            className="color-secondary mb-5"
                            href="single-property.html"
                          >
                            <h4>{project.title}</h4>
                          </a>
                          <span className="address icon-primary f-14">
                            <i className="fa fa-map-marker" />
                            {project.address}
                          </span>
                        </div>
                        {/* <ul className="about-property icon-primary d-table f-14 z-index-1 position-relative">
                          <li>
                            <span className="color-primary">400</span> sqft
                          </li>
                          <li>
                            <span className="color-primary">3</span> Bedrooms
                          </li>
                          <li>
                            <span className="color-primary">2</span> Bathrooms
                          </li>
                          <li>
                            <span className="color-primary">1</span> Garage
                          </li>
                        </ul> */}
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
}

export default HightlightProject;
