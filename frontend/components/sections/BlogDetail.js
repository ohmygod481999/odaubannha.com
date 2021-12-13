import React, { useEffect, useState } from "react";
import CommentInArticle from "./CommentInArticle";
import { getStrapiURL } from "../../utils/api";
import { getStrapiImage } from "../../utils/medias";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
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
import { useRouter } from "next/router";
import styles from "../../styles/BlogDetail.module.css";
function BlogDetail({ article, articlesData }) {
  const route = useRouter();
  const _getLink = (path) => {
    return `${
      process.env.NEXT_PUBLIC_DEV_URL || "https://odaubannha.com"
    }${path}`;
  };
  console.log(_getLink(route.asPath));
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
                        <li
                        >
                          <FacebookShareButton
                            url={_getLink(route.asPath)}
                            style={{
                              color: "black"
                            }}
                          >
                            <i className="fa fa-facebook" />
                          </FacebookShareButton>
                        </li>
                        <li>
                          <TwitterShareButton
                            url={_getLink(route.asPath)}
                            style={{
                              color: "black"
                            }}
                            >
                            <i className="fa fa-twitter" />
                            </TwitterShareButton>
                        </li>
                        <li>
                          <LinkedinShareButton
                            url={_getLink(route.asPath)}
                            style={{
                              color: "black"
                            }}
                            >
                            <i class="fa fa-linkedin"></i>
                            </LinkedinShareButton>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="blog-sidebar color-secondary-a">
              {/* Search form */}
              {/* <form className="form-inline position-relative shadow wow slideInDown animated">
                <input
                  className="form-control w-100 mb-0"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="search-btn">
                  <i className="fa fa-search" aria-hidden="true" />
                </button>
              </form> */}

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
                          <a
                            className="post-widget-title"
                            href={`/articles/${article.slug}`}
                          >
                            {article.title}
                          </a>
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
