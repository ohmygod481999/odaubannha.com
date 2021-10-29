import React from "react";
import CommentInArticle from "./CommentInArticle";
import { getStrapiURL } from "../../utils/api";
import { getStrapiImage } from "../../utils/medias";
import { formatDate, convertMarkdownToHtml } from "../../utils/common";

function BlogDetailFull({ article }) {
    const { title, description, image, created_at } = article;
    const htmlDescription = convertMarkdownToHtml(description);
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="single_post">
                            <div className="blog_img">
                                <img
                                    src={getStrapiImage(image)}
                                    alt="blog_img1"
                                />
                            </div>
                            <div className="blog_content">
                                <div className="blog_text">
                                    <h2 className="blog_title">{title}</h2>
                                    <ul className="list_none blog_meta">
                                        <li>
                                            <a>
                                                <i className="ti-user" /> By
                                                Admin
                                            </a>
                                        </li>
                                        <li>
                                            <a>
                                                <i className="ti-calendar" />{" "}
                                                {formatDate(created_at)}
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a href="#">
                                                <i className="ti-comments" /> 2
                                            </a>
                                        </li> */}
                                    </ul>
                                    {/* <p>
                                        {description}
                                    </p> */}
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: htmlDescription,
                                        }}
                                    ></div>

                                    <div className="blog_post_footer">
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-md-8 mb-3 mb-md-0">
                                                {/* <div className="artical_tags">
                                                    <a href="#">General</a>
                                                    <a href="#">Design</a>
                                                    <a href="#">jQuery</a>
                                                </div> */}
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="social_icons text-md-right">
                                                    <li>
                                                        {typeof window !==
                                                            "undefined" && (
                                                            <a
                                                                target="_blank"
                                                                rel="noreferrer"
                                                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                                                    window
                                                                        .location
                                                                        .href
                                                                )}`}
                                                                className="sc_facebook"
                                                            >
                                                                <i className="ion-social-facebook" />
                                                            </a>
                                                        )}
                                                    </li>
                                                    {/* <li>
                                                        <a
                                                            href="#"
                                                            className="sc_twitter"
                                                        >
                                                            <i className="ion-social-twitter" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="sc_google"
                                                        >
                                                            <i className="ion-social-googleplus" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="sc_youtube"
                                                        >
                                                            <i className="ion-social-youtube-outline" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="sc_instagram"
                                                        >
                                                            <i className="ion-social-instagram-outline" />
                                                        </a>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="post_navigation py-3 border-top border-bottom">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-5">
                                    <a href="#">
                                        <div className="post_nav post_nav_prev">
                                            <i className="ti-arrow-left" />
                                            <span className="text-uppercase nav_meta">
                                                Previous Post
                                            </span>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-2">
                                    <a href="#" className="post_nav_home">
                                        <i className="ti-layout-grid2" />
                                    </a>
                                </div>
                                <div className="col-5">
                                    <a href="#">
                                        <div className="post_nav post_nav_next">
                                            <i className="ti-arrow-right" />
                                            <span className="text-uppercase nav_meta">
                                                Next Post
                                            </span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div> */}
                        {/* <CommentInArticle /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetailFull;
