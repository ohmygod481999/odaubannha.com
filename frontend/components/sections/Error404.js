import React from "react";

function Error404() {
    return (
        <div className="section">
            <div className="container">
                <div className="row justify-content-center">
                    <div
                        className="col-lg-6 col-md-10 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.3s"
                    >
                        <div className="text-center">
                            <div className="error_txt">Trang không tồn tại</div>
                            <h5 className="mb-2 mb-sm-4">
                                oops! The page you requested was not found!
                            </h5>
                            <p>
                                The page you are looking for was moved, removed,
                                renamed or might never existed.
                            </p>
                            {/* <div className="search_form pb-3 pb-sm-4">
                                <form method="post">
                                    <input
                                        name="text"
                                        id="text"
                                        type="text"
                                        placeholder="Search..."
                                        className="form-control"
                                    />
                                    <button
                                        type="button"
                                        className="btn icon_search"
                                    >
                                        <i className="ion-ios-search-strong" />
                                    </button>
                                </form>
                            </div> */}
                            <a href="/" className="btn btn-default">
                                Về trang chủ
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Error404;
