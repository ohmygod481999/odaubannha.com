import React from "react";
import CommentInArticle from "./CommentInArticle";
import { getStrapiURL } from "../../utils/api";
import { getStrapiImage } from "../../utils/medias";
import {
  formatDate,
  convertMarkdownToHtml,
  getDayInMonth,
  getMonthName
} from "../../utils/common";

function BlogDetail({ article }) {
  const { title, description, image, created_at } = article;
  const htmlDescription = convertMarkdownToHtml(description);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="blog-item mt-md-50">
              <div className="blog-img position-relative post-content wow slideInUp animated">
                <img src={getStrapiImage(image)} alt="Image" />
                <div className="date post-date float-left bg-gray mr-20 text-center color-secondary">
                  <div className="py-10">
                    <span className="d-block">{getDayInMonth(created_at)}</span>
                    {getMonthName(created_at)}
                  </div>
                </div>
              </div>
              <div className="blog-info color-secondary-a">
                <div className="post-meta icon-primary color-secondary-a pt-30 pb-15 wow slideInDown animated">
                  <ul className="post-info list-style-1 d-flex color-secondary">
                    <li>
                      <i className="fa fa-user" /> Admin
                    </li>
                  </ul>
                </div>
                <h3 className="mb-20 color-secondary wow slideInUp animated">
                  {title}
                </h3>

                <p className={`mb-15 wow slideInUp animated`}>
                  {htmlDescription}
                </p>

                <blockquote className="bg-gray color-secondary text-center p-30 my-30 wow slideInDown animated">
                  <span className="mb-15 color-primary">
                    <i className="fa fa-quote-left" />
                  </span>
                  <p className="m-0">
                    <strong>{title}</strong>
                  </p>
                </blockquote>
                <div className="row my-30 wow slideInUp animated">
                  <div className="col-lg-6 col-md-6">
                    <img src={getStrapiImage(image)} alt="image" />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <img src={getStrapiImage(image)} alt="image" />
                  </div>
                </div>
                <div className="share bg-gray p-30 mt-30 wow slideInUp animated">
                  <div className="row">
                    <div className="col-lg-7 col-md-7">
                      <ul className="social-media-2 large color-secondary-a">
                        <li className="mr-10">Share:</li>
                        <li>
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-behance" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-5 col-md-5">
                      <div className="float-right mt-sm-30">
                        <ul className="pagination">
                          <li className="page-item">
                            <a className="page-link" href="#">
                              Prev
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="blog-sidebar color-secondary-a">
              {/* Search form */}
              <form className="form-inline position-relative shadow wow slideInDown animated">
                <input
                  className="form-control w-100 mb-0"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="search-btn">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form>
              {/* Categories */}
              <div className="widget py-50 px-30 bg-white mt-50 shadow wow slideInDown animated">
                <h3 className="color-secondary line-bottom pb-15 mb-30">
                  Content
                </h3>
                <ul className="widget-catogory">
                  <li>
                    <a href="#">{title}</a>
                  </li>
                </ul>
              </div>
              {/* Recent News */}
              <div className="widget py-50 px-30 bg-white mt-50 shadow wow slideInDown animated">
                <h3 className="color-secondary line-bottom pb-15 mb-30">
                  Recent News
                </h3>
                <ul className="widget-news">
                  <li>
                    <h6>
                      <a className="post-widget-title" href="#">
                        Pellentes bibendum felis soc feugy tempus suscipit
                        bibendum.
                      </a>
                    </h6>
                    <div className="post-meta color-gray mt-5 f-14">
                      <span className="d-inline-block">10 Mar 2020</span>
                      <a
                        className="d-inline-block color-gray float-right"
                        href="#"
                      >
                        02 Comments
                      </a>
                    </div>
                  </li>
                  <li>
                    <h6>
                      <a className="post-widget-title" href="#">
                        Pellentes bibendum felis soc feugy tempus suscipit
                        bibendum.
                      </a>
                    </h6>
                    <div className="post-meta color-gray mt-5 f-14">
                      <span className="d-inline-block">10 Mar 2020</span>
                      <a
                        className="d-inline-block color-gray float-right"
                        href="#"
                      >
                        02 Comments
                      </a>
                    </div>
                  </li>
                  <li>
                    <h6>
                      <a className="post-widget-title" href="#">
                        Pellentes bibendum felis soc feugy tempus suscipit
                        bibendum.
                      </a>
                    </h6>
                    <div className="post-meta color-gray mt-5 f-14">
                      <span className="d-inline-block">10 Mar 2020</span>
                      <a
                        className="d-inline-block color-gray float-right"
                        href="#"
                      >
                        02 Comment
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Widget Archive */}
              <div className="widget py-50 px-30 bg-white mt-50 shadow wow slideInDown animated">
                <h3 className="color-secondary line-bottom pb-15 mb-30">
                  Archive
                </h3>
                <ul className="widget-archive">
                  <li>
                    <a href="#">February 2020</a>
                  </li>
                  <li>
                    <a href="#">January 2020</a>
                  </li>
                  <li>
                    <a href="#">December 2019</a>
                  </li>
                  <li>
                    <a href="#">November 2019</a>
                  </li>
                  <li>
                    <a href="#">October 2019</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetail;
