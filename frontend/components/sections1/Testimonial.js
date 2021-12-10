import React, { useEffect, useState } from "react";
import { getStrapiImage } from "../../utils/medias";

function Testimonial({ feedback }) {
    const { testimonial } = feedback;
    const { title, subtitle, description, comments } = testimonial;
    const [height, setHeight] = useState("460px");
    const [style, setStyle] = useState({
        image: {
            width: 160,
            height: 160,
        },
        h3: {
            fontSize: "20px",
        },
        content: {
            fontSize: "16px",
        },
    });
    const reSize = (size, style) => {
        setHeight(size);
        setStyle(style);
    };
    useEffect(() => {
        if (window.innerWidth <= 550) {
            reSize("600px", {
                image: {
                    width: 200,
                    height: 200,
                },
                h3: {
                    fontSize: "20px",
                },
                content: {
                    fontSize: "20px",
                },
            });
        } else {
            reSize("460px", {
                image: {
                    width: 160,
                    height: 160,
                },
                h3: {
                    fontSize: "20px",
                },
                content: {
                    fontSize: "16px",
                },
            });
        }
        window.addEventListener("resize", reSize);
        // reSize();
    }, []);
    return (
        <section className="bg-gray pb-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 wow animated slideInUp">
                        <div className="main-title w-50 mx-auto d-table text-center mb-60">
                            <span className="small-title color-primary position-relative line-2-primary">
                                Testimonial
                            </span>
                            <h2 className="title mb-20 color-secondary">
                                What Our Client's Say
                            </h2>
                            <span className="sub-title">
                                Sociis eget dui hendrerit urna felis euismod
                                viverra. Inceptos habitasse augue quisque
                                facilisis per. Nibh justo massa suscipit.
                            </span>
                        </div>
                    </div>
                    {/* Slider HTML markup */}
                    <div
                        className="wow animated slideInDown"
                        id="layer-testimonial"
                        style={{
                            width: "1280px",
                            height: "360px",
                            margin: "0 auto",
                            marginBottom: "0px",
                            backgroundColor: "#242424",
                        }}
                    >
                        {/* Slide 1*/}
                        {comments.map((comment) => {
                            const {
                                name1,
                                content1,
                                image1,
                                name2,
                                content2,
                                image2,
                            } = comment;
                            return (
                                <div
                                    className="ls-slide"
                                    data-ls="duration:4000; kenburnsscale:1.2;"
                                >
                                    <img
                                        width={160}
                                        height={160}
                                        src={getStrapiImage(image1[0])}
                                        className="ls-l"
                                        alt=""
                                        style={{
                                            borderRadius: "50%",
                                            top: "60px",
                                            left: "501px",
                                        }}
                                        data-ls="offsetyin:-100; durationin:800; delayin:600; easingin:easeOutExpo; scaleyin:0.8; offsetyout:-300; durationout:400; parallaxlevel:0;"
                                    />
                                    <h3
                                        style={{
                                            lineHeight: "36px",
                                            fontFamily: '"Montserrat"',
                                            top: "87px",
                                            left: "165px",
                                            color: "#fff",
                                        }}
                                        className="ls-l"
                                        data-ls="offsetyin:-130; durationin:700; delayin:700; easingin:easeOutExpo; durationout:400; parallaxlevel:0;"
                                    >
                                        {name1}
                                    </h3>
                                    <p
                                        style={{
                                            width: "320px",
                                            fontSize: "16px",
                                            fontFamily: '"Roboto"',
                                            lineHeight: "30px",
                                            top: "135px",
                                            left: "163px",
                                            whiteSpace: "normal",
                                            color: "#fff",
                                        }}
                                        className="ls-l"
                                        data-ls="offsetyin:-100; durationin:800; delayin:800; easingin:easeOutExpo; durationout:400; parallaxlevel:0;"
                                    >
                                        {content1}
                                    </p>
                                    <img
                                        width={160}
                                        height={160}
                                        src={getStrapiImage(image2[0])}
                                        className="ls-l"
                                        alt=""
                                        style={{
                                            borderRadius: "50%",
                                            top: "140px",
                                            left: "619px",
                                        }}
                                        data-ls="offsetyin:100; durationin:800; delayin:1300; easingin:easeOutExpo; scaleyin:0.8; offsetyout:300; durationout:400; parallaxlevel:0;"
                                    />
                                    <h3
                                        style={{
                                            lineHeight: "36px",
                                            fontFamily: '"Montserrat"',
                                            top: "167px",
                                            left: "812px",
                                            color: "#fff",
                                        }}
                                        className="ls-l"
                                        data-ls="offsetyin:100; durationin:700; delayin:1400; easingin:easeOutExpo; durationout:400; parallaxlevel:0;"
                                    >
                                        {name2}
                                    </h3>
                                    <p
                                        style={{
                                            width: "330px",
                                            fontSize: "16px",
                                            fontFamily: '"Roboto"',
                                            lineHeight: "30px",
                                            top: "215px",
                                            left: "810px",
                                            whiteSpace: "normal",
                                            color: "#fff",
                                        }}
                                        className="ls-l"
                                        data-ls="offsetyin:100; durationin:800; delayin:1500; easingin:easeOutExpo; durationout:400; parallaxlevel:0;"
                                    >
                                        {content2}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
    
}

export default Testimonial;
