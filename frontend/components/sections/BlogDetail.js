import React from "react";
import CommentInArticle from "./CommentInArticle";
import { getStrapiURL } from "../../utils/api";
import { getStrapiImage } from "../../utils/medias";
import { formatDate, convertMarkdownToHtml } from "../../utils/common";

function BlogDetail({ article }) {
    const { title, description, image, created_at } = article;
    const htmlDescription = convertMarkdownToHtml(description);
    return (
        <div className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
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
                                            <a href="#">
                                                <i className="ti-user" /> By
                                                Admin
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
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
                                                <div className="artical_tags">
                                                    <a href="#">General</a>
                                                    <a href="#">Design</a>
                                                    <a href="#">jQuery</a>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="social_icons text-md-right">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="sc_facebook"
                                                        >
                                                            <i className="ion-social-facebook" />
                                                        </a>
                                                    </li>
                                                    <li>
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
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post_navigation py-3 border-top border-bottom">
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
                        </div>
                        {/* <CommentInArticle /> */}
                    </div>
                    <div className="col-lg-3 mt-3 mt-lg-0">
                        <div className="sidebar">
                            <div className="widget">
                                <h5 className="widget_title">Search</h5>
                                <div className="search_form">
                                    <form>
                                        <input
                                            required
                                            className="form-control"
                                            placeholder="Search..."
                                            type="text"
                                        />
                                        <button
                                            type="submit"
                                            title="Subscribe"
                                            className="btn icon_search"
                                            name="submit"
                                            value="Submit"
                                        >
                                            <i className="ion-ios-search-strong" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="widget">
                                <h5 className="widget_title">Recent Posts</h5>
                                <ul className="widget_recent_post">
                                    <li>
                                        <div className="post_footer">
                                            <div className="post_img">
                                                <a href="#">
                                                    <img
                                                        src="/assets/images/letest_post1.jpg"
                                                        alt="letest_post1"
                                                    />
                                                </a>
                                            </div>
                                            <div className="post_content">
                                                <h6>
                                                    <a href="#">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                    </a>
                                                </h6>
                                                <p className="small m-0">
                                                    April 14, 2018
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="post_footer">
                                            <div className="post_img">
                                                <a href="#">
                                                    <img
                                                        src="/assets/images/letest_post2.jpg"
                                                        alt="letest_post2"
                                                    />
                                                </a>
                                            </div>
                                            <div className="post_content">
                                                <h6>
                                                    <a href="#">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                    </a>
                                                </h6>
                                                <p className="small m-0">
                                                    April 14, 2018
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="post_footer">
                                            <div className="post_img">
                                                <a href="#">
                                                    <img
                                                        src="/assets/images/letest_post3.jpg"
                                                        alt="letest_post3"
                                                    />
                                                </a>
                                            </div>
                                            <div className="post_content">
                                                <h6>
                                                    <a href="#">
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                    </a>
                                                </h6>
                                                <p className="small m-0">
                                                    April 14, 2018
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget">
                                <h5 className="widget_title">Categories</h5>
                                <ul className="widget_categories">
                                    <li>
                                        <a href="#">
                                            <span className="categories_name">
                                                Lifestyle
                                            </span>
                                            <span className="categories_num">
                                                (7)
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="categories_name">
                                                Design
                                            </span>
                                            <span className="categories_num">
                                                (15)
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="categories_name">
                                                Branding
                                            </span>
                                            <span className="categories_num">
                                                (8)
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="categories_name">
                                                Marketing
                                            </span>
                                            <span className="categories_num">
                                                (16)
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="categories_name">
                                                Creative
                                            </span>
                                            <span className="categories_num">
                                                (12)
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="categories_name">
                                                Lifestyle
                                            </span>
                                            <span className="categories_num">
                                                (11)
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget">
                                <h5 className="widget_title">tags</h5>
                                <div className="tags">
                                    <a href="#">General</a>
                                    <a href="#">Design</a>
                                    <a href="#">jQuery</a>
                                    <a href="#">Branding</a>
                                    <a href="#">Modern</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Quotes</a>
                                    <a href="#">Advertisement</a>
                                </div>
                            </div>
                            <div className="widget">
                                <h6 className="widget_title text-uppercase">
                                    Instagram
                                </h6>
                                <ul className="widget_instafeed instafeed_col3">
                                    <li>
                                        <a href="#">
                                            <img
                                                src="/assets/images/insta_img1.jpg"
                                                alt="insta_img"
                                            />
                                            <span className="insta_icon">
                                                <i className="ti-instagram" />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                src="/assets/images/insta_img2.jpg"
                                                alt="insta_img"
                                            />
                                            <span className="insta_icon">
                                                <i className="ti-instagram" />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                src="/assets/images/insta_img3.jpg"
                                                alt="insta_img"
                                            />
                                            <span className="insta_icon">
                                                <i className="ti-instagram" />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                src="/assets/images/insta_img4.jpg"
                                                alt="insta_img"
                                            />
                                            <span className="insta_icon">
                                                <i className="ti-instagram" />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                src="/assets/images/insta_img5.jpg"
                                                alt="insta_img"
                                            />
                                            <span className="insta_icon">
                                                <i className="ti-instagram" />
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img
                                                src="/assets/images/insta_img6.jpg"
                                                alt="insta_img"
                                            />
                                            <span className="insta_icon">
                                                <i className="ti-instagram" />
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetail;
