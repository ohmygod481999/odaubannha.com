import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { getCategories } from "../utils/api";
import { getRegions } from "../services/region.service";
import { getStrapiMedia } from "../utils/medias";
import { useDispatch } from "react-redux";
import { formatMoney } from "../utils/common";
import { addProduct, toggleCart } from "../redux/reducers/cartReducer";
import { getMenu } from "../services/menu.service";
import _ from "lodash"

function Menu({ regionWithCategories, menu }) {
    const { title, image } = menu;
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(addProduct(product));
        dispatch(toggleCart());
    };

    return (
        <div>
            <Breadcrumb title={title} image={image} />
            {regionWithCategories.map((region, i) => (
                <div
                    key={region.id}
                    className="section pb_70"
                    style={{
                        paddingBottom:
                            i !== regionWithCategories.length - 1 ? 0 : "auto",
                        paddingTop: i !== 0 ? "50px" : "auto",
                    }}
                >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div
                                    className="heading_tab_header animation"
                                    data-animation="fadeInUp"
                                    data-animation-delay="0.02s"
                                >
                                    <div className="heading_s1">
                                        <h2>{region.title}</h2>
                                    </div>
                                    <div className="tab-style1">
                                        <button
                                            className="navbar-toggler"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#tabmenubar"
                                            aria-expanded="false"
                                        >
                                            <span className="ion-android-menu" />
                                        </button>
                                        <ul
                                            id={`tabmenubar${region.id}`}
                                            className="nav nav-tabs"
                                            role="tablist"
                                        >
                                            {region.categories.map(
                                                (category) => (
                                                    <li
                                                        key={category.id}
                                                        className="nav-item"
                                                    >
                                                        <a
                                                            className="nav-link"
                                                            id={
                                                                category.id +
                                                                region.id
                                                            }
                                                            data-toggle="tab"
                                                            href={`#${
                                                                category.slug +
                                                                region.id
                                                            }`}
                                                            role="tab"
                                                            aria-controls={
                                                                category.slug +
                                                                region.id
                                                            }
                                                            aria-selected="true"
                                                        >
                                                            {category.name}
                                                        </a>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="tab-content">
                                    {region.categories.map((category, i) => (
                                        <div
                                            key={category.slug + region.id}
                                            className={`tab-pane fade ${
                                                i == 0 && "show active"
                                            }`}
                                            id={category.slug + region.id}
                                            role="tabpanel"
                                            aria-labelledby={
                                                category.id + region.id
                                            }
                                        >
                                            <div className="row">
                                                {category.products.map(
                                                    (product) => (
                                                        <div
                                                            key={product.id}
                                                            className="col-lg-3 col-sm-6"
                                                        >
                                                            <div className="single_product">
                                                                <div className="menu_product_img">
                                                                    <img
                                                                        src={getStrapiMedia(
                                                                            _.get(
                                                                                product,
                                                                                "image.url"
                                                                            )
                                                                        )}
                                                                        alt={
                                                                            product.title
                                                                        }
                                                                    />
                                                                    <div
                                                                        className="action_btn"
                                                                        onClick={() =>
                                                                            addToCart(
                                                                                product
                                                                            )
                                                                        }
                                                                    >
                                                                        <a
                                                                            // href="#"
                                                                            className="btn btn-white"
                                                                        >
                                                                            CHỌN
                                                                            MÓN
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="menu_product_info">
                                                                    <div className="title">
                                                                        <h5>
                                                                            <a
                                                                            // href="#"
                                                                            >
                                                                                {
                                                                                    product.title
                                                                                }
                                                                            </a>
                                                                        </h5>
                                                                    </div>
                                                                    <p>
                                                                        {product
                                                                            .description
                                                                            .length >
                                                                        100
                                                                            ? product.description.substring(
                                                                                  0,
                                                                                  100
                                                                              ) +
                                                                              "..."
                                                                            : product.description}
                                                                    </p>
                                                                </div>
                                                                <div className="menu_footer">
                                                                    <div className="rating">
                                                                        <div
                                                                            className="product_rate"
                                                                            style={{
                                                                                width:
                                                                                    "68%",
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <div className="price">
                                                                        <span>
                                                                            {formatMoney(
                                                                                product.price
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Menu;

export async function getServerSideProps() {
    // const products = await getProducts();
    const [categories, regions, menu] = await Promise.all([
        getCategories(),
        getRegions(),
        getMenu(),
    ]);

    const regionWithCategories = regions.map((region) => {
        return {
            ...region,
            categories: categories.map((category) => {
                return {
                    ...category,
                    products: category.products.filter((product) =>
                        product.regions
                            .map((region) => region.id)
                            .includes(region.id)
                    ),
                };
            }),
        };
    });

    return { props: { regionWithCategories, menu } };
}
