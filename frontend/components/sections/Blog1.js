import React from "react";
import { getStrapiMedia } from "../../utils/medias";

function Blog1({ articles = [] }) {
    return (
        <div className="section pb_70">
            <div className="container">
                <div className="row justify-content-center">
                    <div
                        className="col-lg-6 col-md-8 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.02s"
                    >
                        <div className="heading_s1 text-center">
                            <span className="sub_heading font_style1">
                                From The Blog
                            </span>
                            <h2>Our Latest News</h2>
                        </div>
                        <p className="text-center leads">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {articles
                        .filter((a, i) => i < 3)
                        .map((article) => (
                            <div
                                key={article.id}
                                className="col-lg-4 col-md-6 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.03s"
                            >
                                <div className="blog_post blog_style1 box_shadow1">
                                    <div className="blog_img">
                                        <a href="#">
                                            <img
                                                src={getStrapiMedia(
                                                    article.image.formats
                                                        .thumbnail.url
                                                )}
                                                alt={article.title}
                                            />
                                        </a>
                                        <span className="post_date radius_all_10">
                                            <strong>02</strong> May
                                        </span>
                                    </div>
                                    <div className="blog_content">
                                        <div className="blog_text">
                                            <ul className="list_none blog_meta">
                                                <li>
                                                    <a href="#">
                                                        <i className="linearicons-user" />{" "}
                                                        By Admin
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="linearicons-bubbles" />{" "}
                                                        2 Comment
                                                    </a>
                                                </li>
                                            </ul>
                                            <h5 className="blog_title">
                                                <a href="#">{article.title}</a>
                                            </h5>
                                            <p>{article.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Blog1;
