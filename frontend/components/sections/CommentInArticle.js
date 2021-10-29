import React from "react";

function CommentInArticle() {
    return (
        <div>
            <div className="card post_author">
                <div className="card-body">
                    <div className="author_img">
                        <img src="/assets/images/user1.jpg" alt="user1" />
                    </div>
                    <div className="author_info">
                        <h6 className="author_name">
                            <a href="#" className="mb-1 d-inline-block">
                                Cherieh Smith
                            </a>
                        </h6>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
            <div className="comment-area">
                <div className="content_title">
                    <h5>(03) Comments</h5>
                </div>
                <ul className="list_none comment_list">
                    <li className="comment_info">
                        <div className="d-flex">
                            <div className="comment_user">
                                <img
                                    src="/assets/images/user2.jpg"
                                    alt="user2"
                                />
                            </div>
                            <div className="comment_content">
                                <div className="d-flex">
                                    <div className="meta_data">
                                        <h6>
                                            <a href="#">Sarah Taylor</a>
                                        </h6>
                                        <div className="comment-time">
                                            MARCH 5, 2018, 6:05 PM
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <a href="#" className="comment-reply">
                                            <i className="ion-reply-all" />
                                            Reply
                                        </a>
                                    </div>
                                </div>
                                <p>
                                    We denounce With righteous indignation and
                                    dislike men who are so beguiled and
                                    demoralized by the charms of pleasure of the
                                    moment, so blinded by desire that the cannot
                                    foresee the pain and trouble.
                                </p>
                            </div>
                        </div>
                        <ul className="children">
                            <li className="comment_info">
                                <div className="d-flex">
                                    <div className="comment_user">
                                        <img
                                            src="/assets/images/user3.jpg"
                                            alt="user3"
                                        />
                                    </div>
                                    <div className="comment_content">
                                        <div className="d-flex align-items-md-center">
                                            <div className="meta_data">
                                                <h6>
                                                    <a href="#">John Becker</a>
                                                </h6>
                                                <div className="comment-time">
                                                    april 8, 2018, 5:15 PM
                                                </div>
                                            </div>
                                            <div className="ml-auto">
                                                <a
                                                    href="#"
                                                    className="comment-reply"
                                                >
                                                    <i className="ion-reply-all" />
                                                    Reply
                                                </a>
                                            </div>
                                        </div>
                                        <p>
                                            We denounce With righteous
                                            indignation and dislike men who are
                                            so beguiled and demoralized by the
                                            charms of pleasure of the moment, so
                                            blinded by desire that the cannot
                                            foresee the pain and trouble.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="comment_info">
                        <div className="d-flex">
                            <div className="comment_user">
                                <img
                                    src="/assets/images/user4.jpg"
                                    alt="user4"
                                />
                            </div>
                            <div className="comment_content">
                                <div className="d-flex">
                                    <div className="meta_data">
                                        <h6>
                                            <a href="#">Daisy Lana</a>
                                        </h6>
                                        <div className="comment-time">
                                            april 15, 2018, 10:30 PM
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <a href="#" className="comment-reply">
                                            <i className="ion-reply-all" />
                                            Reply
                                        </a>
                                    </div>
                                </div>
                                <p>
                                    We denounce With righteous indignation and
                                    dislike men who are so beguiled and
                                    demoralized by the charms of pleasure of the
                                    moment, so blinded by desire that the cannot
                                    foresee the pain and trouble.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="content_title">
                    <h5>Leave a comment</h5>
                </div>
                <form name="enq" method="post">
                    <div className="row">
                        <div className="form-group col-md-4">
                            <input
                                name="name"
                                className="form-control"
                                placeholder="Your Name"
                                required="required"
                                type="text"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <input
                                name="email"
                                className="form-control"
                                placeholder="Your Email"
                                required="required"
                                type="email"
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <input
                                name="website"
                                className="form-control"
                                placeholder="Your Website"
                                required="required"
                                type="text"
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <textarea
                                rows={3}
                                name="message"
                                className="form-control"
                                placeholder="Your Comment"
                                required="required"
                                defaultValue={""}
                            />
                        </div>
                        <div className="form-group col-md-12">
                            <button
                                value="Submit"
                                name="submit"
                                className="btn btn-default"
                                title="Submit Your Message!"
                                type="submit"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CommentInArticle;
