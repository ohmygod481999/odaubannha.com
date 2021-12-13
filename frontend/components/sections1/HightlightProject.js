import { useRouter } from "next/router";
import React, { useState } from "react";
import { FacebookShareButton } from "react-share";
import { formatMoney } from "../../utils/common";
import { getStrapiImage } from "../../utils/medias";
import InterestedProjectModal from "../InterestedProjectModal";

const _getLink = (path) => {
    return `${
        process.env.NEXT_PUBLIC_DEV_URL || "https://odaubannha.com"
    }${path}`;
};
  

function HightlightProject({ HightlightProject }) {
    const router = useRouter();
    const { highlight_project, products } = HightlightProject;
    const { title, subtitle, description } = highlight_project;

    const [dataInterestedModal, setDataInterestedModal] = useState({
        state: 0,
        data: null,
    });

    return (
        <section>
            <InterestedProjectModal
                state={dataInterestedModal.state}
                dataModal={dataInterestedModal.data}
                setDataInterestedModal={setDataInterestedModal}
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 wow animated slideInUp">
                        <div className="main-title w-75 mx-auto d-table text-center mb-30">
                            <span className="small-title color-primary position-relative line-2-primary">
                                {subtitle}
                            </span>
                            <h2 className="title mb-20 color-secondary">
                                {title}
                            </h2>
                            <span className="sub-title">{description}</span>
                        </div>
                    </div>
                    {products.map((project, i) => {
                        const { information_product, labels } = project;
                        return (
                            <div
                                key={project.id}
                                className="col-md-12 col-lg-6 col-xl-4 wow animated slideInUp"
                            >
                                <div className="property-thumbnail mt-30">
                                    <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                                        <img
                                            src={getStrapiImage(project.image)}
                                            alt="image"
                                        />
                                        <div className="thumbnail-content z-index-1 color-white-a color-white">
                                        {labels? labels.split(",").map((label, i) => (
                                                              <span className={`thum-category category-${i + 1} bg-secondary color-white z-index-1 px-15`}>
                                                                  {label}
                                                              </span>
                                                            )) : null}
                                            <ul className="hover-option position-absolute icon-white z-index-1">
                                                <li>
                                                    <a
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Wishlist"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setDataInterestedModal(
                                                                {
                                                                    state:
                                                                        dataInterestedModal.state +
                                                                        1,
                                                                    data: project,
                                                                }
                                                            );
                                                        }}
                                                    >
                                                        <i
                                                            className="fa fa-heart-o"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title="Share on Facebook"
                                                        href="#"
                                                    >
                                                        <FacebookShareButton
                                                            url={project.url}
                                                            style={{
                                                                color: "black",
                                                            }}
                                                        >
                                                            <i
                                                                className="fa fa-random"
                                                                aria-hidden="true"
                                                            />
                                                        </FacebookShareButton>
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="hover-content py-30 px-20 overlay-hover-gradient">
                                                <div className="thumbnail-title z-index-1 position-relative">
                                                    <span className="thumbnail-price bg-white color-secondary px-15 mb-10 d-table">
                                                        {project.price.from} tỷ - {project.price.to} tỷ
                                                    </span>
                                                    <a
                                                        className="color-secondary mb-5"
                                                        href={project.url}
                                                    >
                                                        <h4>{project.title}</h4>
                                                    </a>
                                                    <span className="address icon-primary f-14">
                                                        <i className="fa fa-map-marker" />
                                                        {project.address}
                                                    </span>
                                                </div>

                                                <ul className="about-property icon-primary d-table f-14 z-index-1 position-relative">
                                                    {information_product.map(
                                                        (info) => {
                                                            const {
                                                                value,
                                                                utility,
                                                            } = info;
                                                            const {
                                                                title,
                                                                image,
                                                            } = utility;
                                                            return (
                                                                <li>
                                                                    <span className="color-primary">
                                                                        {value}
                                                                    </span>{" "}
                                                                    {title}
                                                                </li>
                                                            );
                                                        }
                                                    )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default HightlightProject;
