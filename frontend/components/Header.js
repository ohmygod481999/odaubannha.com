import React, { useEffect, useState } from "react";
import { getStrapiMedia, getStrapiImage } from "../utils/medias";
import { useSelector, useDispatch } from "react-redux";
import { toggleCart } from "../redux/reducers/cartReducer";
import { config, navs } from "../config";
import Image from "next/image";
import { fetchAPI } from "../utils/api";

function renderNav() {
  return (
    <ul className="navbar-nav ml-auto">
      {navs.map((nav, i) => (
        <li key={i} className="nav-item dropdown">
          {/* <Link href={nav.path || ""}> */}
          <a
            href={nav.path || ""}
            data-toggle={nav.items ? "dropdown" : ""}
            className={`nav-link ${nav.items && "dropdown-toggle"} ${
              nav.active && "active"
            }`}
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
                      data-toggle={item.items ? "dropdown" : null}
                    >
                      {item.name}
                    </a>
                    {item.items ? (
                      <div className="dropdown-menu">
                        <ul>
                          {item.items.map((subItem, i) => (
                            <li key={i} className="dropdown">
                              {/* <Link
                                                                    href={
                                                                        subItem.path
                                                                    }
                                                                > */}
                              <a
                                href={subItem.path}
                                className={`dropdown-item nav-link nav_item ${
                                  subItem.active && "active"
                                }`}
                              >
                                import Link from next/link
                              </a>
                              {/* </Link> */}
                            </li>
                          ))}
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

function Header({ generalInfo }) {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { products } = cartState;

  const _toggleCart = () => {
    dispatch(toggleCart());
  };
  const nav = renderNav();
  return (
    <header className="" style={{ width: "100vw" }}>
      <div
        id="header"
        className="nav-header header-four bg-secondary py-10 border-bottom-1-dark"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light px-0 py-0">
                <a className="navbar-brand" href="/">
                  {generalInfo.logo && (
                    <img
                      className="nav-logo"
                      src={getStrapiImage(generalInfo.logo)}
                      alt="logo"
                    />
                  )}
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

      {/* <div className="header-src-fild bg-secondary py-20">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <form className="adbanced-form-one amenities-list pt-15">
                <div className="row">
                  <div className="form-group col-md-10">
                    <input
                      className="form-control mt-sm-15"
                      type="text"
                      name="address"
                      placeholder="Search here"
                    />
                  </div>
                  <div className="form-group col-md-2">
                    <button className="btn btn-primary w-100 mt-sm-15">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
}

export default Header;
