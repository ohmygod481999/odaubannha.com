import React, { useEffect } from "react";
import { getStrapiMedia } from "../../utils/medias";
import { useDispatch } from "react-redux";
import { addProduct, toggleCart } from "../../redux/reducers/cartReducer";
import { formatMoney } from "../../utils/common";
import { color } from "../../utils/color";
import _ from "lodash"

function Menu2({ categories = [] }) {
    const dispatch = useDispatch();

    const addToCart = (product) => {
        dispatch(addProduct(product));
        dispatch(toggleCart());
    };
    return (
        <div
            className="section pb_70"
            style={{ backgroundColor: color.lightYellow }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <div
                            className="heading_tab_header animation"
                            style={{
                                borderBottomColor: color.green,
                            }}
                            data-animation="fadeInUp"
                            data-animation-delay="0.02s"
                        >
                            <div className="heading_s1">
                                <h2 style={{ color: color.green }}>
                                    Thực đơn của chúng tôi
                                </h2>
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
                                    id="tabmenubar"
                                    className="nav nav-tabs"
                                    role="tablist"
                                >
                                    {categories.map((category) => (
                                        <li
                                            key={category.id}
                                            className="nav-item"
                                        >
                                            <a
                                                className="nav-link"
                                                id={category.id}
                                                data-toggle="tab"
                                                href={`#${category.slug}`}
                                                role="tab"
                                                aria-controls={category.slug}
                                                aria-selected="true"
                                            >
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tab-content">
                            {categories.map((category, i) => (
                                <div
                                    key={category.id}
                                    className={`tab-pane fade ${
                                        i == 0 && "show active"
                                    }`}
                                    id={category.slug}
                                    role="tabpanel"
                                    aria-labelledby={category.id}
                                >
                                    <div className="row">
                                        {category.products.map((product) => (
                                            <div
                                                key={product.id}
                                                className="col-lg-3 col-sm-6"
                                            >
                                                <div
                                                    className="single_product"
                                                    style={{
                                                        backgroundColor:
                                                            color.lighterYellow,
                                                    }}
                                                >
                                                    <div className="menu_product_img">
                                                        <img
                                                            src={getStrapiMedia(
                                                                _.get(
                                                                    product,
                                                                    "image.url"
                                                                )
                                                            )}
                                                            alt={product.title}
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
                                                                CHỌN MÓN
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
                                                            {product.description
                                                                .length > 100
                                                                ? product.description.substring(
                                                                      0,
                                                                      100
                                                                  ) + "..."
                                                                : product.description}
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="menu_footer"
                                                        style={{
                                                            borderTopColor:
                                                                color.green,
                                                        }}
                                                    >
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
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu2;
