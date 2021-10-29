import React, { useEffect, useState } from "react";
import Pagination from "../Pagination";
import { getDayInMonth, getMonthName } from "../../utils/common";
import { getStrapiMedia, getStrapiImage } from "../../utils/medias";

function Blog({ articles = [], currentPage, itemPerPage, totalItems }) {
    const [pathName, setPathName] = useState("")

    useEffect(() => {
        setPathName(window.location.pathname)
    }, [])
    
    return (
        <div className="section">
            <div className="container">
                <div className="row justify-content-center">
                    {articles.map((article) => {
                        const url = `${pathName}/${article.slug}`
                        return (
                            <div
                                key={article.id}
                                className="col-lg-4 col-md-6 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.2s"
                            >
                                <div className="blog_post blog_style1 box_shadow1">
                                    <div className="blog_img">
                                        <a href={url}>
                                            <img
                                                src={getStrapiImage(
                                                    article.image,
                                                    "LARGE"
                                                )}
                                                alt="blog_small_img1"
                                            />
                                        </a>
                                        <span className="post_date radius_all_10">
                                            <strong>
                                                {getDayInMonth(
                                                    article.created_at
                                                )}
                                            </strong>{" "}
                                            {getMonthName(article.created_at)}
                                        </span>
                                    </div>
                                    <div className="blog_content">
                                        <div className="blog_text">
                                            <ul className="list_none blog_meta">
                                                <li>
                                                    <a>
                                                        <i className="ti-user" />{" "}
                                                        By Admin
                                                    </a>
                                                </li>
                                                {/* <li>
                                                    <a href="#">
                                                        <i className="ti-comments" />{" "}
                                                        2 Comment
                                                    </a>
                                                </li> */}
                                            </ul>
                                            <h5 className="blog_title">
                                                <a href={url}>{article.title}</a>
                                            </h5>
                                            <p>
                                                {article.subDescription ||
                                                    article.description.substring(
                                                        0,
                                                        20
                                                    )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalItems={totalItems}
                    itemPerPage={itemPerPage}
                />
            </div>
        </div>
    );
}

export default Blog;
