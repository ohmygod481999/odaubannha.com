import React from "react";

function Feature1({ commitment }) {
    const { subDescription, title, titleDescriptionIcon } = commitment;
    return (
        <div className="section pb_70">
            <div className="container">
                <div className="row justify-content-center">
                    <div
                        className="col-md-6 animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.2s"
                    >
                        <div className="heading_s1 text-center">
                            <h2>{title}</h2>
                        </div>
                        <p className="text-center leads">{subDescription}</p>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {titleDescriptionIcon.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <div
                                className="icon_box icon_box_style1 text-center animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.02s"
                            >
                                <div className="icon">
                                    <i className={item.icon} />
                                    {/* <i className="flaticon-shipped" /> */}
                                </div>
                                <div className="icon_box_content">
                                    <h5 className="text-uppercase">
                                        {item.title}
                                    </h5>
                                    <p>
                                        {item.subDescription}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* <div className="col-lg-4 col-md-6">
                        <div
                            className="icon_box icon_box_style1 text-center animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.03s"
                        >
                            <div className="icon">
                                <i className="flaticon-dining-table" />
                            </div>
                            <div className="icon_box_content">
                                <h5 className="text-uppercase">
                                    Đảm bảo chất lượng
                                </h5>
                                <p>
                                    There are many variations of passages of
                                    Lorem Ipsum available in some form
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="icon_box icon_box_style1 text-center animation"
                            data-animation="fadeInUp"
                            data-animation-delay="0.04s"
                        >
                            <div className="icon">
                                <i className="flaticon-destination" />
                            </div>
                            <div className="icon_box_content">
                                <h5 className="text-uppercase">
                                    Hương vị thơm ngon
                                </h5>
                                <p>
                                    There are many variations of passages of
                                    Lorem Ipsum available in some form
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Feature1;
