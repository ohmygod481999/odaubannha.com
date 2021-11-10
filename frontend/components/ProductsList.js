import React from "react";
import { getStrapiImage } from "../utils/medias";
import { format } from "date-fns";
import { formatMoney } from "../utils/common";
function ProductsList({ products, categories, regions }) {
  const _handleFormatDate = (time) => {
    const date = new Date(time);
    const result = format(date, "dd/MM/yyyy").toString();
    return result;
  };
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12 wow slideInDown animated">
            <div className="top-filter pb-15 border-bottom-1-gray">
              <div className="row">
                <div className="col-md-3 col-lg-6 col-xl-7">
                  <label>Tổng số có {products.length} kết quả </label>
                </div>
                <div className="col-md-9 col-lg-6 col-xl-5">
                  <div className="row">
                    <div className="col-md-8 col-lg-7">
                      <form>
                        <div className="form-group d-flex mb-0">
                          <label className="w-50">Short By :</label>
                          <div className="select-wrapper position-relative w-100">
                            <select className="select form-control">
                              <option>Default</option>
                              <option>Newest</option>
                              <option>Oldest</option>
                              <option>Random</option>
                            </select>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-4 col-lg-5">
                      <ul
                        className="nav nav-tabs border-0 float-right navbar-tab-view mt-sm-15"
                        id="myTab"
                        role="tablist"
                        style={{ lineHeight: 20 }}
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="home-tab"
                            data-toggle="tab"
                            href="#home"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            <i className="fa fa-th-large" aria-hidden="true" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="contact-tab"
                            data-toggle="tab"
                            href="#contact"
                            role="tab"
                            aria-controls="contact"
                            aria-selected="false"
                          >
                            <i className="fa fa-th" aria-hidden="true" />
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="profile-tab"
                            data-toggle="tab"
                            href="#profile"
                            role="tab"
                            aria-controls="profile"
                            aria-selected="false"
                          >
                            <i className="fa fa-list" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <form className="adbanced-form-two amenities-list bg-white py-40 px-30 mt-30">
              <div className="row">
                <div className="form-group col-lg-12 pt-15 wow slideInDown animated">
                  <label>Loại nhà</label>
                  <div className="select-wrapper position-relative mt-5">
                    <select className="select form-control">
                      {categories.map((category) => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group col-lg-12 pt-15 wow slideInUp animated">
                  <label>Khu vực</label>
                  <div className="select-wrapper position-relative">
                    <select className="select form-control">
                      {regions.map((region) => (
                        <option key={region.id} value={region.title}>
                          {region.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group col-lg-12 pt-15 mb-0 wow slideInDown animated">
                  <label>Mức Giá</label>
                  <ul className="list-bottom select-option">
                    <li>
                      <input
                        id="feature-1"
                        className="d-none"
                        type="checkbox"
                      />
                      <label htmlFor="feature-1">2 tỉ - 4 tỉ</label>
                    </li>
                    <li>
                      <input
                        id="feature-2"
                        className="d-none"
                        type="checkbox"
                      />
                      <label htmlFor="feature-2">4 tỉ - 8 tỉ</label>
                    </li>
                    <li>
                      <input
                        id="feature-3"
                        className="d-none"
                        type="checkbox"
                      />
                      <label htmlFor="feature-3">8 tỉ - 10 tỉ</label>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-12 col-lg-8">
            <div className="tab-content mt-md-50" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  {products.map((product, index) => {
                    const { id, title, price, updated_at, image, address } =
                      product;
                    return (
                      <div
                        key={id}
                        className={`col-md-12 col-lg-6 wow ${
                          index % 2 !== 0 ? "slideInLeft" : "slideInRight"
                        } animated`}
                      >
                        <div className="property-item position-relative mt-30">
                          <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                            <img src={getStrapiImage(image)} alt="image" />
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
                            </ul>
                            <div className="meta-property icon-primary color-white z-index-1">
                              <ul>
                                <li>
                                  <i className="fa fa-calendar" />{" "}
                                  {_handleFormatDate(updated_at)}
                                </li>
                                <li>
                                  <i className="fa fa-user" /> admin
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="property-content bg-white pt-30 pb-50 px-30">
                            <a className="color-secondary mb-5" href="#">
                              <h4>{title}</h4>
                            </a>
                            <span className="address icon-primary f-14 mb-10">
                              <i className="fa fa-map-marker" />
                              {address}
                            </span>

                            <div className="property-cost color-white list-half w-100">
                              <ul>
                                <li></li>
                                <li>{formatMoney(price)} </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="row">
                  {products.map((product, index) => {
                    const { id, title, price, image, address } = product;
                    return (
                      <div
                        key={id}
                        className={`col-md-12 col-lg-6 wow ${
                          index % 2 === 0 ? "slideInRight" : "slideInLeft"
                        } animated`}
                      >
                        <div className="property-thumbnail mt-30">
                          <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                            <img src={getStrapiImage(image)} alt="image" />
                            <div className="thumbnail-content z-index-1 color-white-a color-white">
                              <span className="thum-category category-1 bg-secondary color-white z-index-1 px-15">
                                For Sale
                              </span>
                              <ul className="hover-option position-absolute icon-white z-index-1">
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
                              </ul>
                              <div className="hover-content py-30 px-20 overlay-hover-gradient">
                                <div className="thumbnail-title z-index-1 position-relative">
                                  <span className="thumbnail-price bg-white color-secondary px-15 mb-10 d-table">
                                    {formatMoney(price)}
                                  </span>
                                  <a
                                    className="color-secondary mb-5"
                                    href="single-property.html"
                                  >
                                    <h4>{title}</h4>
                                  </a>
                                  <span className="address icon-primary f-14">
                                    <i className="fa fa-map-marker" />
                                    {address}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* <div className="col-lg-12 wow slideInDown animated">
                    <div className="mx-auto d-table">
                      <ul className="pagination mt-50">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Prev
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link active" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  {products.map((product, index) => {
                    const { id, title, price, image, address, updated_at } =
                      product;
                    return (
                      <div
                        key={id}
                        className={`col-md-12 col-lg-12 wow ${
                          index % 2 !== 0 ? "slideInDown" : "slideInUp"
                        } animated`}
                      >
                        <div className="property-list mt-30">
                          <div className="property-item d-flex">
                            <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                              <img src={getStrapiImage(image)} alt="image" />
                              <ul className="hover-option position-absolute icon-white z-index-1">
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
                              </ul>
                              <div className="meta-property icon-primary color-white z-index-1">
                                <ul>
                                  <li>
                                    <i className="fa fa-calendar" />{" "}
                                    {_handleFormatDate(updated_at)}
                                  </li>
                                  <li>
                                    <i className="fa fa-user" /> Admin
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="property-content bg-white pt-30 pb-50 px-30 position-relative">
                              <a
                                className="color-secondary mb-5"
                                href="single-property.html"
                              >
                                <h4>{title}</h4>
                              </a>
                              <span className="address icon-primary f-14">
                                <i className="fa fa-map-marker" />
                                {address}
                              </span>

                              <span className="tags color-gray mb-30 d-block">
                                Appartment, Bar, Hotel, House
                              </span>
                              <div className="property-cost color-white list-half w-100">
                                <ul>
                                  <li></li>
                                  <li>{formatMoney(price)}</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* <div className="col-lg-12 wow slideInDown animated">
                    <div className="mx-auto d-table">
                      <ul className="pagination mt-50">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Prev
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link active" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductsList;
