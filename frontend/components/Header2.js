import React, { useState, useEffect } from "react";
import { getStrapiMedia, getStrapiImage } from "../utils/medias";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../redux/reducers/cartReducer";
import { config, navs } from "../config";
import Image from "next/image";
import { color } from "../utils/color";
import { fetchAPI } from "../utils/api";

function renderNav() {
    return (
        <ul className="navbar-nav">
            {navs.map((nav, i) => (
                <li key={i} className="dropdown">
                    {/* <Link href={nav.path || ""}> */}
                    <a
                        href={nav.path || ""}
                        data-toggle={nav.items ? "dropdown" : ""}
                        style={{
                            color: color.yellow,
                            padding: "7px 13px",
                        }}
                        className={`nav-link ${
                            nav.items && "dropdown-toggle"
                        } ${nav.active && "active"}`}
                    >
                        {nav.name}
                    </a>
                    {/* </Link> */}
                    {nav.items ? (
                        <div className="dropdown-menu">
                            <ul>
                                {nav.items.map((item, i) => (
                                    <li key={i}>
                                        {/* <Link href={item.path}> */}
                                        <a
                                            href={item.path}
                                            className={`dropdown-item menu-link ${
                                                item.items && "dropdown-toggler"
                                            } ${item.active && "active"}`}
                                            data-toggle={
                                                item.items ? "dropdown" : null
                                            }
                                        >
                                            {item.name}
                                        </a>
                                        {/* </Link> */}
                                        {/* <a
                                            className={`dropdown-item menu-link ${
                                                item.items && "dropdown-toggler"
                                            } ${item.active && "active"}`}
                                            data-toggle={
                                                item.items ? "dropdown" : null
                                            }
                                            href={item.path}
                                        >
                                            {item.name}
                                        </a> */}
                                        {item.items ? (
                                            <div className="dropdown-menu">
                                                <ul>
                                                    {item.items.map(
                                                        (subItem, i) => (
                                                            <li
                                                                key={i}
                                                                className="dropdown"
                                                            >
                                                                {/* <Link
                                                                    href={
                                                                        subItem.path
                                                                    }
                                                                > */}
                                                                <a
                                                                    href={
                                                                        subItem.path
                                                                    }
                                                                    className={`dropdown-item nav-link nav_item ${
                                                                        subItem.active &&
                                                                        "active"
                                                                    }`}
                                                                >
                                                                    import Link
                                                                    from
                                                                    next/link
                                                                </a>
                                                                {/* </Link> */}
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        ) : null}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : null}
                </li>
            ))}
        </ul>
    );
}

function Header2({ generalInfo }) {
    const cartState = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { products } = cartState;

    const _toggleCart = () => {
        dispatch(toggleCart());
    };
    const nav = renderNav();
    return (
        <header
            className="header_wrap fixed-top header_with_topbar dark_skin main_menu_uppercase"
            style={{
                backgroundColor: color.yellow,
            }}
        >
            <div className="top-title">
                Ở ĐÂY CÓ BÁN
                <br /> BÚN RIÊU TÓP MỠ MỌC GIÒN
            </div>
            <div
                className="d-none d-md-block"
                style={{
                    backgroundColor: color.green,
                    color: color.yellow,
                    fontSize: 27,
                    border: "none",
                    // fontFamily: "iCielNormal",
                }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 text-center p-2 ">
                            <nav className="navbar navbar-expand-lg">
                                <div
                                    className="collapse navbar-collapse justify-content-end"
                                    id="navbarSupportedContent"
                                >
                                    {nav}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{
                    border: "2px solid " + color.green,
                }}
            >
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="/">
                            <img
                                className="logo_light"
                                // src="/assets/images/logo_light.png"
                                // src={getStrapiMedia("/uploads/logo_1_41c7157257.jpg")}
                                src={getStrapiImage(generalInfo.logo)}
                                alt="logo"
                            />
                            <img
                                className="logo_dark"
                                // src="/assets/images/logo_dark.png"
                                src={getStrapiImage(generalInfo.logo)}
                                alt="logo"
                            />
                        </a>
                        <div className="main-title">
                            Ở ĐÂY CÓ BÁN BÚN RIÊU TÓP MỠ MỌC GIÒN
                        </div>
                        <ul className="navbar-nav attr-nav align-items-center">
                            <li>
                                <a
                                    href="javascript:void(0);"
                                    className="nav-link search_trigger"
                                >
                                    <i className="linearicons-magnifier" />
                                </a>
                                <div className="search_wrap">
                                    <span className="close-search">
                                        <i className="ion-ios-close-empty" />
                                    </span>
                                    <form>
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="form-control"
                                            id="search_input"
                                        />
                                        <button
                                            type="submit"
                                            className="search_icon"
                                        >
                                            <i className="ion-ios-search-strong" />
                                        </button>
                                    </form>
                                </div>
                                <div className="search_overlay" />
                            </li>
                            <li>
                                <a
                                    className="nav-link cart_triggerr"
                                    href="javascript:void(0);"
                                    onClick={_toggleCart}
                                >
                                    <i className="linearicons-cart" />
                                    {(products || []).length > 0 && (
                                        <span className="cart_count">
                                            {(products || []).length}
                                        </span>
                                    )}
                                </a>
                                <div className="cart_box">
                                    <div className="cart_header">
                                        <h3>Your Cart</h3>
                                    </div>
                                    <ul className="cart_list">
                                        <li>
                                            <a href="#" className="item_remove">
                                                <i className="ion-close" />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/images/cart_thamb1.jpg"
                                                    alt="cart_thumb1"
                                                />
                                                Berry Salad
                                            </a>
                                            <span className="cart_quantity">
                                                {" "}
                                                1 x{" "}
                                                <span className="cart_amount">
                                                    {" "}
                                                    <span className="price_symbole">
                                                        $
                                                    </span>
                                                </span>
                                                78.00
                                            </span>
                                        </li>
                                        <li>
                                            <a href="#" className="item_remove">
                                                <i className="ion-close" />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/images/cart_thamb2.jpg"
                                                    alt="cart_thumb2"
                                                />
                                                Milky Fruit
                                            </a>
                                            <span className="cart_quantity">
                                                {" "}
                                                1 x{" "}
                                                <span className="cart_amount">
                                                    {" "}
                                                    <span className="price_symbole">
                                                        $
                                                    </span>
                                                </span>
                                                81.00
                                            </span>
                                        </li>
                                        <li>
                                            <a href="#" className="item_remove">
                                                <i className="ion-close" />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/images/cart_thamb3.jpg"
                                                    alt="cart_thumb3"
                                                />
                                                Egg Bread
                                            </a>
                                            <span className="cart_quantity">
                                                {" "}
                                                1 x{" "}
                                                <span className="cart_amount">
                                                    {" "}
                                                    <span className="price_symbole">
                                                        $
                                                    </span>
                                                </span>
                                                78.00
                                            </span>
                                        </li>
                                        <li>
                                            <a href="#" className="item_remove">
                                                <i className="ion-close" />
                                            </a>
                                            <a href="#">
                                                <img
                                                    src="assets/images/cart_thamb4.jpg"
                                                    alt="cart_thumb4"
                                                />
                                                Orange Jam
                                            </a>
                                            <span className="cart_quantity">
                                                {" "}
                                                1 x{" "}
                                                <span className="cart_amount">
                                                    {" "}
                                                    <span className="price_symbole">
                                                        $
                                                    </span>
                                                </span>
                                                81.00
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="cart_footer">
                                        <p className="cart_total">
                                            <strong>Total:</strong>{" "}
                                            <span className="cart_price">
                                                {" "}
                                                <span className="price_symbole">
                                                    $
                                                </span>
                                                159.00
                                            </span>
                                        </p>
                                        <p className="cart_buttons">
                                            <a
                                                href="#"
                                                className="btn btn-default btn-radius checkout"
                                            >
                                                Checkout
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-expanded="false"
                        >
                            <span className="ion-android-menu" />
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header2;
