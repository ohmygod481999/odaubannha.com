import React from "react";
import { getStrapiURL } from "../../utils/api";
import Link from "next/link";
import { color } from "../../utils/color";

function About1({
    title,
    image_url,
    subDescription,
    description,
    btnText,
    btnLink,
}) {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-6 wow animated slideInLeft">
                        <div className="side-title">
                            <span className="small-title color-primary position-relative line-primary">
                                About Company
                            </span>
                            <h2 className="title mb-20 color-secondary">
                                We&apos;re is this business since{" "}
                                <span className="color-primary">1981</span> and
                                we provide the best real estate services
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6 wow animated slideInRight">
                        <div className="text-area">
                            <p>
                                Feugiat lorem purus inceptos est aliquet cum,
                                scelerisque odio nullam purus fames lobortis
                                hendrerit sit congue eget aptent ultricies vitae
                                praese elemen diam fames phasellus taciti
                                cubilia inceptos. Dictum sapien inceptos interdu
                                aliquet euismod. Parturie laoreet faucibus
                                sollicitud porta cum mi dis mattis ultricies
                                montes morbi Lorem quam a facilisi.
                            </p>
                            <div className="play-video position-relative mt-30">
                                <div className="row">
                                    <div className="col-md-3 col-lg-4 col-xl-3">
                                        <div className="video-shadow">
                                            <div className="video">
                                                <a
                                                    data-fancybox
                                                    className="video-popup bg-primary color-white"
                                                    href="https://www.youtube.com/watch?v=8NXLyGiShjs"
                                                >
                                                    <i
                                                        className="fa fa-play"
                                                        aria-hidden="true"
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9 col-lg-8 col-xl-9">
                                        <div className="y-center color-secondary">
                                            <span>
                                                Click on this video to check how
                                                <br /> we work
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12">
                        <div className="property-looking mt-60">
                            <div className="row">
                                <div className="col-md-6 col-lg-3 wow animated slideInUp">
                                    <div className="text-thumbnail text-center bg-secondary py-40 px-30 color-white color-white-a">
                                        <a className="mb-20" href="#">
                                            <h4>Modern Villa</h4>
                                        </a>
                                        <p className="mb-20">
                                            Fames elementum sollicitud pretiuma
                                            aenean consequat curabitur
                                            hendrerit.
                                        </p>
                                        <span className="d-block bg-primary icon-white flat-small">
                                            <i className="flaticon-house-2" />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 wow animated slideInDown">
                                    <div className="text-thumbnail text-center bg-secondary py-40 px-30 mt-sm-30 color-white color-white-a">
                                        <a className="mb-20" href="#">
                                            <h4>Family House</h4>
                                        </a>
                                        <p className="mb-20">
                                            Fames elementum sollicitud pretiuma
                                            aenean consequat curabitur
                                            hendrerit.
                                        </p>
                                        <span className="d-block bg-primary icon-white flat-small">
                                            <i className="flaticon-rental" />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 wow animated slideInUp">
                                    <div className="text-thumbnail text-center bg-secondary py-40 px-30 mt-md-30 color-white color-white-a">
                                        <a className="mb-20" href="#">
                                            <h4>Town House</h4>
                                        </a>
                                        <p className="mb-20">
                                            Fames elementum sollicitud pretiuma
                                            aenean consequat curabitur
                                            hendrerit.
                                        </p>
                                        <span className="d-block bg-primary icon-white flat-small">
                                            <i className="flaticon-hotel" />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3 wow animated slideInDown">
                                    <div className="text-thumbnail text-center bg-secondary py-40 px-30 mt-md-30 color-white color-white-a">
                                        <a className="mb-20" href="#">
                                            <h4>Appartment</h4>
                                        </a>
                                        <p className="mb-20">
                                            Fames elementum sollicitud pretiuma
                                            aenean consequat curabitur
                                            hendrerit.
                                        </p>
                                        <span className="d-block bg-primary icon-white flat-small">
                                            <i className="flaticon-rental" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About1;
