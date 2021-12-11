import React, { useEffect, useState } from "react";
import { getStrapiMedia, getStrapiImage } from "../utils/medias";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../redux/reducers/cartReducer";
import { config, navs } from "../config";
import Image from "next/image";
import { fetchAPI } from "../utils/api";

function renderNav() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const { $ } = window;
            $(".search-field .fa-search").click(function () {
                $(".search-field .search").addClass("show");
                $(".search-field .fa-search").css({
                    display: "none",
                });
                $(".search-field .fa-times").css({
                    display: "block",
                });
            });
            $(".search-field .fa-times").click(function () {
                $(".search-field .search").removeClass("show").val("");
                $(".search-field .fa-times").css({
                    display: "none",
                });
                $(".search-field .fa-search").css({
                    display: "block",
                });
            });
        }
    }, []);

    return (
        <ul className="navbar-nav mx-auto">
            {navs.map((nav, i) => (
                <li key={i} className="nav-item dropdown">
                    {/* <Link href={nav.path || ""}> */}
                    <a
                        href={nav.path || ""}
                        data-toggle={nav.items ? "dropdown" : ""}
                        className={`nav-link ${
                            nav.items && "dropdown-toggle"
                        } ${nav.active && "active"}`}
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        {nav.name}
                    </a>
                    {/* </Link> */}
                    {nav.items ? (
                        <ul className="dropdown-menu shadow">
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
                        </ul>
                    ) : null}
                </li>
            ))}

            <li className="nav-item">
                <form className="search-field" action="/projects" >
                    <input
                        name="title"
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
        <header className="nav-on-banner">
            <div id="header" className="nav-header header-four py-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light px-0">
                                <a className="navbar-brand" href="/">
                                    <img
                                        className="nav-logo"
                                        src={getStrapiImage(generalInfo.logo)}
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
                                    {nav}
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header2;
