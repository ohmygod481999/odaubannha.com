import React, { useEffect, useState } from "react";
import CommentInArticle from "./CommentInArticle";
import { getStrapiURL } from "../../utils/api";
import { getStrapiImage } from "../../utils/medias";
import Link from "next/link";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from "react-html-parser";
import {
  formatDate,
  convertMarkdownToHtml,
  getDayInMonth,
  getMonthName
} from "../../utils/common";

function BlogDetail({ article, articlesData }) {
  const { title, description, image, created_at } = article;
  // let htmlDescription;
  const [htmlDescription, setHtmlDescription] = useState(
    convertMarkdownToHtml(description)
  );

  const random = articlesData
    .filter((x) => x.id !== article.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

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

                <p
                  className={`mb-15 wow slideInUp animated`}
                  // dangerouslySetInnerHTML={{ __html: htmlDescription }}
                >
                  {ReactHtmlParser(htmlDescription)}
                </p>

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

              {/* Recent News */}
              <div className="widget py-50 px-30 bg-white mt-50 shadow wow slideInDown animated">
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
      </div>
    </section>
  );
}

export default BlogDetail;
