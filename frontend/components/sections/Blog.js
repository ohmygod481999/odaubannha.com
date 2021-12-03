import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { formatDate, getDayInMonth, getMonthName } from "../../utils/common";
import { getStrapiMedia, getStrapiImage } from "../../utils/medias";
import Link from "next/link";
function Blog({ articles = [], currentPage, itemPerPage, totalItems }) {
  const [pathName, setPathName] = useState("");
  const random = articles.sort(() => 0.5 - Math.random()).slice(0, 3);
  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);
  console.log(articles);
  return (
    //
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-8">
            <div className="row">
              {articles.map((article, index) => {
                return (
                  <div
                    className={`col-md-12 col-lg-6 mb-20 wow ${
                      index % 2 !== 0 ? "slideInDown" : "slideInUp"
                    } animated`}
                    key={article.id}
                  >
                    <div className="post-thumbnail hover-secondery-primary">
                      <div
                        className="post-img overflow-hidden"
                        style={{ cursor: "pointer" }}
                      >
                        <Link href={`/articles/${article.slug}`}>
                          <img
                            src={getStrapiImage(article.image, "LARGE")}
                            alt="Image not found!"
                          />
                        </Link>
                      </div>
                      <div className="post-meta icon-primary color-secondary-a px-20 py-10 bg-gray">
                        <ul className="post-info list-style-1 d-flex color-secondary">
                          <li>
                            <i className="fa fa-user" /> Admin
                          </li>
                        </ul>
                      </div>
                      <div className="post-content mt-20 color-secondary color-secondary-a">
                        <div className="post-date w-25 float-left bg-gray mr-20 text-center">
                          <div className="py-10">
                            <span className="d-block">
                              {getDayInMonth(article.created_at)}
                            </span>
                            {getMonthName(article.created_at)}
                          </div>
                        </div>
                        <div className="text-area d-table">
                          <Link href={`/articles/${article.slug}`}>
                            <a className="post-title mb-15">
                              <h5>{article.title}</h5>
                            </a>
                          </Link>
                          <p
                            style={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: "3"
                            }}
                          >
                            {article.subdescription}
                          </p>
                          <Link href={`/articles/${article.slug}`}>
                            <a className="btn-more mt-15">Read More</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="blog-sidebar color-secondary-a">
              {/* Recent News */}
              <div className="widget py-50 px-30 bg-white  shadow wow slideInDown animated">
                <h3 className="color-secondary line-bottom pb-15 mb-30">
                  Recent news
                </h3>
                <ul className="widget-news">
                  {random.map((article) => {
                    return (
                      <li>
                        <h6>
                          <Link
                            className="post-widget-title"
                            href={`/articles/${article.slug}`}
                          >
                            {article.title}
                          </Link>
                        </h6>
                        <div className="post-meta color-gray mt-5 f-14">
                          <span className="d-inline-block">
                            {formatDate(article.published_at)}
                          </span>
                          <a
                            className="d-inline-block color-gray float-right"
                            href="#"
                          >
                            by admin
                          </a>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalItems={totalItems}
          itemPerPage={itemPerPage}
        />
      </div>
    </section>
  );
}

export default Blog;
