import React, { useEffect, useState } from "react";
import { getStrapiMedia, getStrapiImage } from "../utils/medias";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../redux/reducers/cartReducer";
import { config, navs } from "../config";
import Image from "next/image";
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

function Header({ generalInfo }) {
    const cartState = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const { products } = cartState;

    const _toggleCart = () => {
        dispatch(toggleCart());
    };
    const nav = renderNav();
    return (
        <header className="nav-on-top">
            <div className="top-header bg-secondary border-bottom-1-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-9 col-xl-8">
                            <ul className="list-style-1 icon-primary color-white d-flex">
                                <li>
                                    <i className="fa fa-map-marker" /> 40
                                    Towerhill Avenue, Melbourne, Australia.
                                </li>
                                <li>
                                    <i className="fa fa-phone" /> +(844)
                                    234-567-800
                                </li>
                                <li>
                                    <i className="fa fa-envelope" />{" "}
                                    info@webmail.com
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-12 col-lg-3 col-xl-4">
                            <ul className="social-media-1 d-flex color-white-a float-right">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-behance" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="header"
                className="nav-header header-four bg-secondary py-10 border-bottom-1-dark"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light px-0">
                                <a className="navbar-brand" href="index.html">
                                    <img
                                        className="nav-logo"
                                        src="images/logo/logo-white.png"
                                        alt="logo"
                                    />
                                </a>
                                <button
                                    className="toggle-btn"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span />
                                    <span />
                                    <span />
                                </button>
                                <div
                                    className="collapse navbar-collapse"
                                    id="navbarSupportedContent"
                                >
                                    <ul className="navbar-nav mx-auto">
                                        <li className="nav-item dropdown mega-menu">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="index.html"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Home
                                            </a>
                                            <ul className="dropdown-menu mega-menu-dropdown">
                                                <li className="mega-menu-area">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index.html"
                                                                    >
                                                                        Default
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-2.html"
                                                                    >
                                                                        Investment
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-3.html"
                                                                    >
                                                                        3D
                                                                        Slider
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-4.html"
                                                                    >
                                                                        Agency
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-17.html"
                                                                    >
                                                                        Video
                                                                        Search
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-21.html"
                                                                    >
                                                                        Video
                                                                        Scroll
                                                                        Nav
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-5.html"
                                                                    >
                                                                        Map
                                                                        Search
                                                                        Box
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-6.html"
                                                                    >
                                                                        Banner
                                                                        Search
                                                                        Box
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-7.html"
                                                                    >
                                                                        Search
                                                                        on Map
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-8.html"
                                                                    >
                                                                        Search
                                                                        on
                                                                        Banner
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-18.html"
                                                                    >
                                                                        Search
                                                                        on video
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-22.html"
                                                                    >
                                                                        World
                                                                        Map View
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-9.html"
                                                                    >
                                                                        Header
                                                                        Search
                                                                        Map
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-10.html"
                                                                    >
                                                                        Search
                                                                        on Map 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-11.html"
                                                                    >
                                                                        Search
                                                                        on Map 3
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-12.html"
                                                                    >
                                                                        Property
                                                                        Search
                                                                        Scroll
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-19.html"
                                                                    >
                                                                        Search
                                                                        on Video
                                                                        2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                    >
                                                                        Coming
                                                                        Soon
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-13.html"
                                                                    >
                                                                        Featured
                                                                        Property
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-14.html"
                                                                    >
                                                                        Property
                                                                        Search
                                                                        List
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-15.html"
                                                                    >
                                                                        Agent
                                                                        Search
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-16.html"
                                                                    >
                                                                        Agent
                                                                        Search 2
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="index-20.html"
                                                                    >
                                                                        Map
                                                                        Scroll
                                                                        Nav
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                    >
                                                                        Coming
                                                                        Soon
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Listing
                                            </a>
                                            <ul className="dropdown-menu shadow">
                                                <li className="dropdown">
                                                    <a
                                                        className="dropdown-toggle dropdown-item"
                                                        href="#"
                                                    >
                                                        Property
                                                    </a>
                                                    <ul className="dropdown-menu shadow">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="property-grid-full-width.html"
                                                            >
                                                                property Grid
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="property-list-full-width.html"
                                                            >
                                                                Property List
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="property-thumbnail-full-width.html"
                                                            >
                                                                Property
                                                                Thumbnail
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="property-grid-left-sidebar.html"
                                                            >
                                                                Property Grid
                                                                Left Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="property-list-left-sidebar.html"
                                                            >
                                                                Property List
                                                                Left Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="property-thumbnail-left-sidebar.html"
                                                            >
                                                                Property
                                                                Thumbnail Left
                                                                Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="property-grid-right-sidebar.html"
                                                            >
                                                                Property Grid
                                                                Right Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="property-list-right-sidebar.html"
                                                            >
                                                                Property List
                                                                Right Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="property-thumbnail-right-sidebar.html"
                                                            >
                                                                Property
                                                                Thumbnail Right
                                                                Sidebar
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="single-property.html"
                                                    >
                                                        Single Property
                                                    </a>
                                                </li>
                                                <li className="dropdown">
                                                    <a
                                                        className="dropdown-toggle dropdown-item"
                                                        href="#"
                                                    >
                                                        Booking Page
                                                    </a>
                                                    <ul className="dropdown-menu shadow">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="booking.html"
                                                            >
                                                                Booking Requests
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="booking-form.html"
                                                            >
                                                                Book Now
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="submit-property.html"
                                                    >
                                                        Submit Property
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Agents
                                            </a>
                                            <ul className="dropdown-menu shadow">
                                                <li className="dropdown">
                                                    <a
                                                        className="dropdown-toggle dropdown-item"
                                                        href="#"
                                                    >
                                                        Agents
                                                    </a>
                                                    <ul className="dropdown-menu shadow">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="agent-style-1-grid-left-sidebar.html"
                                                            >
                                                                Agents One Grid
                                                                Left
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="agent-style-1-grid-right-sidebar.html"
                                                            >
                                                                Agents One Grid
                                                                Right
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="agent-style-2-grid-left-sidebar.html"
                                                            >
                                                                Agents Two Grid
                                                                Left
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="agent-style-2-grid-right-sidebar.html"
                                                            >
                                                                Agents Two Grid
                                                                Right
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="agent-style-1-list-left-sidebar.html"
                                                            >
                                                                Agents One List
                                                                Left
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="agent-style-1-list-right-sidebar.html"
                                                            >
                                                                Agents One List
                                                                Right
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="agent-style-2-list-left-sidebar.html"
                                                            >
                                                                Agents Two List
                                                                Left
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="agent-style-2-list-right-sidebar.html"
                                                            >
                                                                Agents Two List
                                                                Right
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown">
                                                    <a
                                                        className="dropdown-toggle dropdown-item"
                                                        href="#"
                                                    >
                                                        Agency
                                                    </a>
                                                    <ul className="dropdown-menu shadow">
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="agency-grid-left-sidebar.html"
                                                            >
                                                                Agency Grid Left
                                                                Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="agency-grid-right-sidebar.html"
                                                            >
                                                                Agency Grid
                                                                Right Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="agency-list-left-sidebar.html"
                                                            >
                                                                Agency List Left
                                                                Sidebar
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="agency-list-right-sidebar.html"
                                                            >
                                                                Agency List
                                                                Right Sidebar
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown mega-menu">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                Pages
                                            </a>
                                            <ul className="dropdown-menu mega-menu-dropdown">
                                                <li className="mega-menu-area">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="about-us.html"
                                                                    >
                                                                        About Us
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="services.html"
                                                                    >
                                                                        Services
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="service-details.html"
                                                                    >
                                                                        Service
                                                                        Details
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="pricing.html"
                                                                    >
                                                                        Pricing
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="faq.html"
                                                                    >
                                                                        FAQ
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="invoice.html"
                                                                    >
                                                                        Invoice
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="login.html"
                                                                    >
                                                                        Login
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="register.html"
                                                                    >
                                                                        Signup
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="error.html"
                                                                    >
                                                                        Error
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="blog-full-width.html"
                                                                    >
                                                                        Blog
                                                                        Full
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="blog-left-sidebar.html"
                                                                    >
                                                                        Blog
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="blog-right-sidebar.html"
                                                                    >
                                                                        Blog
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="blog-details-left-sidebar.html"
                                                                    >
                                                                        Blog
                                                                        Details
                                                                        Left
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="blog-details-right-sidebar.html"
                                                                    >
                                                                        Blog
                                                                        Details
                                                                        Right
                                                                        Sidebar
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/offers.html"
                                                                    >
                                                                        Offers
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/tax-info.html"
                                                                    >
                                                                        Tax
                                                                        Information
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/settings.html"
                                                                    >
                                                                        Settings
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/featured-item.html"
                                                                    >
                                                                        Featured
                                                                        Item
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/dashboard.html"
                                                                    >
                                                                        Dashboard
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/analytics.html"
                                                                    >
                                                                        Analytics
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/customers.html"
                                                                    >
                                                                        Customers
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/message.html"
                                                                    >
                                                                        Message
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/comment.html"
                                                                    >
                                                                        Comment
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/review.html"
                                                                    >
                                                                        Review
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/booking-request.html"
                                                                    >
                                                                        Booking
                                                                        Request
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/listing-property.html"
                                                                    >
                                                                        Listing
                                                                        Property
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/favorite-property.html"
                                                                    >
                                                                        Favorite
                                                                        Property
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3">
                                                            <ul>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/purchased-property.html"
                                                                    >
                                                                        Purchased
                                                                        Property
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/submit-property.html"
                                                                    >
                                                                        Submit
                                                                        Property
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/personal-info.html"
                                                                    >
                                                                        Personal
                                                                        Information
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/profile-setting.html"
                                                                    >
                                                                        Profile
                                                                        Setting
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/payment-invoice.html"
                                                                    >
                                                                        Payment
                                                                        &amp;
                                                                        Invoice
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/change-password.html"
                                                                    >
                                                                        Change
                                                                        Password
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/social-media-setting.html"
                                                                    >
                                                                        Social
                                                                        Media
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="dashboard/recent-item.html"
                                                                    >
                                                                        Recent
                                                                        Item
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        className="dropdown-item"
                                                                        href="#"
                                                                    >
                                                                        Coming
                                                                        Soon
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="contact.html"
                                            >
                                                Contact
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <form className="search-field">
                                                <input
                                                    type="search"
                                                    className="search form-control"
                                                    placeholder="Search Here"
                                                />
                                                <span>
                                                    <i className="fa fa-search" />
                                                    <i className="fa fa-times" />
                                                </span>
                                            </form>
                                        </li>
                                    </ul>
                                    <ul className="admin-info color-white-a">
                                        <li>
                                            <a href="login.html">Sign In</a>
                                        </li>
                                        <li>
                                            <a href="register.html">Sign Up</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-src-fild bg-secondary py-20">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <form className="adbanced-form-one amenities-list pt-15">
                                <div className="row">
                                    <div className="form-group col-lg-3 mb-0 position-relative">
                                        <div className="custom-radio y-center">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="light"
                                                    defaultChecked
                                                />
                                                <span className="design" />
                                                <span className="text">
                                                    Buy
                                                </span>
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="light"
                                                />
                                                <span className="design" />
                                                <span className="text">
                                                    Rent
                                                </span>
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="light"
                                                />
                                                <span className="design" />
                                                <span className="text">
                                                    Sale
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-3 col-md-4">
                                        <div className="select-wrapper position-relative">
                                            <select className="select form-control">
                                                <option>All Type</option>
                                                <option>Appartment</option>
                                                <option>Office</option>
                                                <option>Industry</option>
                                                <option>Commercial</option>
                                                <option>Land</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group col-lg-4 col-md-5">
                                        <input
                                            className="form-control mt-sm-15"
                                            type="text"
                                            name="address"
                                            placeholder="Address, State/City, Zip Code, Location"
                                        />
                                    </div>
                                    <div className="form-group col-md-3 col-lg-2">
                                        <input
                                            className="btn btn-primary w-100 mt-sm-15"
                                            type="submit"
                                            name="search"
                                            defaultValue="Search"
                                        />
                                    </div>
                                    <span className="formicon mb-50">
                                        <a
                                            className="checkbox_collapse"
                                            data-toggle="collapse"
                                            href="#collapseExample"
                                            role="button"
                                            aria-expanded="false"
                                        />
                                    </span>
                                    <div className="col-md-12 col-lg-12">
                                        <div
                                            className="collapse"
                                            id="collapseExample"
                                        >
                                            <div className="card card-body bg-secondary color-white pt-20">
                                                <div className="row">
                                                    <div className="form-group col-lg-3 col-md-6 pt-15">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="min-area"
                                                            placeholder="Min Area (sqft)"
                                                        />
                                                    </div>
                                                    <div className="form-group col-lg-3 col-md-6 pt-15">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="max-area"
                                                            placeholder="Max Area (sqft)"
                                                        />
                                                    </div>
                                                    <div className="form-group col-lg-3 col-md-6 pt-15">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="min-price"
                                                            placeholder="Min Price"
                                                        />
                                                    </div>
                                                    <div className="form-group col-lg-3 col-md-6 pt-15">
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            name="max-price"
                                                            placeholder="Max Price"
                                                        />
                                                    </div>
                                                    <div className="form-group mb-0 col-lg-12">
                                                        <ul className="list-bottom amenities select-option mt-15 p-0">
                                                            <li>
                                                                <input
                                                                    id="feature-1"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-1">
                                                                    Air
                                                                    Condition
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-2"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-2">
                                                                    Refrigerator
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-3"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-3">
                                                                    TV Cable
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-4"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-4">
                                                                    Dryer
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-5"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-5">
                                                                    Wifi
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-6"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-6">
                                                                    Laundry
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-7"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-7">
                                                                    Swimming
                                                                    Pool
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-8"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-8">
                                                                    Outdoor
                                                                    Shower
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-9"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-9">
                                                                    Barbeque
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-10"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-10">
                                                                    Washer
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-11"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-11">
                                                                    Sauna
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-12"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-12">
                                                                    Microwave
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-13"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-13">
                                                                    Gym
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-14"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-14">
                                                                    Lawn
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-15"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-15">
                                                                    Window
                                                                    Covering
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-16"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-16">
                                                                    Home Theater
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-17"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-17">
                                                                    Garden
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-18"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-18">
                                                                    Fire
                                                                    Protection
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-19"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-19">
                                                                    Emergency
                                                                    Exit
                                                                </label>
                                                            </li>
                                                            <li>
                                                                <input
                                                                    id="feature-20"
                                                                    className="d-none"
                                                                    type="checkbox"
                                                                />
                                                                <label htmlFor="feature-20">
                                                                    Security
                                                                    System
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
