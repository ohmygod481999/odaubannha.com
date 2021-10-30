import React from "react";

function Testimonial() {
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
                                 Cảm nhận của khách hàng
                            </h2>
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
                        <div
                            className="ls-slide"
                            data-ls="duration:4000; kenburnsscale:1.2;"
                        >
                            <img
                                width={160}
                                height={160}
                                src="images/testimonial/1.jpg"
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
                                Bảo Long
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
                                "I'm really happy to purchased this item! It has
                                an incredible slider builder! It will be the
                                base of my future projects!"
                            </p>
                            <img
                                width={160}
                                height={160}
                                src="images/testimonial/2.jpg"
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
                                Bích Ngọc
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
                                "Guys, you are fantastic! You created the most
                                user friendly slider I ever used!"
                            </p>
                        </div>
                        {/* Slide 2*/}
                        <div
                            className="ls-slide"
                            data-ls="duration:4000; kenburnsscale:1.2;"
                        >
                            <img
                                width={160}
                                height={160}
                                src="images/testimonial/3.jpg"
                                className="ls-l"
                                alt=""
                                style={{
                                    borderRadius: "50%",
                                    top: "140px",
                                    left: "501px",
                                }}
                                data-ls="offsetyin:100; durationin:800; delayin:600; easingin:easeOutExpo; scaleyin:0.8; offsetyout:300; durationout:400; parallaxlevel:0;"
                            />
                            <h3
                                style={{
                                    lineHeight: "36px",
                                    fontFamily: '"Montserrat"',
                                    top: "167px",
                                    left: "145px",
                                    color: "#fff",
                                }}
                                className="ls-l"
                                data-ls="offsetyin:100; durationin:700; delayin:700; easingin:easeOutExpo; durationout:400; parallaxlevel:0;"
                            >
                                Gia Bảo
                            </h3>
                            <p
                                style={{
                                    width: "330px",
                                    fontSize: "16px",
                                    fontFamily: '"Roboto"',
                                    lineHeight: "30px",
                                    top: "215px",
                                    left: "145px",
                                    whiteSpace: "normal",
                                    color: "#fff",
                                }}
                                className="ls-l"
                                data-ls="offsetyin:100; durationin:800; delayin:800; easingin:easeOutExpo; durationout:400; parallaxlevel:0;"
                            >
                                "Absolutely the best slider I tried! It's far
                                worth the price. Thank you for such a great
                                product!"
                            </p>
                            <img
                                width={160}
                                height={160}
                                src="images/testimonial/4.jpg"
                                className="ls-l"
                                alt=""
                                style={{
                                    borderRadius: "50%",
                                    top: "60px",
                                    left: "619px",
                                }}
                                data-ls="offsetyin:-100; durationin:800; delayin:1300; easingin:easeOutExpo; scaleyin:0.8; offsetyout:-300; durationout:400; parallaxlevel:0;"
                            />
                            <h3
                                style={{
                                    lineHeight: "36px",
                                    fontFamily: '"Montserrat"',
                                    top: "88px",
                                    left: "810px",
                                    color: "#fff",
                                }}
                                className="ls-l"
                                data-ls="offsetyin:-100; durationin:700; delayin:1400; easingin:easeOutExpo; durationout:400; parallaxlevel:0;"
                            >
                                Taam Lee
                            </h3>
                            <p
                                style={{
                                    width: "330px",
                                    fontSize: "16px",
                                    fontFamily: '"Roboto"',
                                    lineHeight: "25px",
                                    top: "138px",
                                    left: "810px",
                                    whiteSpace: "normal",
                                    color: "#fff",
                                }}
                                className="ls-l"
                                data-ls="offsetyin:-100; durationin:800; delayin:1500; easingin:easeOutExpo; durationout:400; parallaxlevel:0;"
                            >
                                "The most intuitive Interface I have ever used.
                                Incredible transitions and features!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
