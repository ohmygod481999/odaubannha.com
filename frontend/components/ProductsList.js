import React, { useCallback, useEffect, useState } from "react";
import { getStrapiImage } from "../utils/medias";
import { getStrapiURL } from "../utils/api";
import { formatDate, formatMoney } from "../utils/common";
import { parseISO } from "date-fns";
import axios from "axios";
import { useRouter } from "next/router";
function ProductsList({ products, categories, regions }) {
    const router = useRouter();
    const initialFilter = {
        categori: "all",
        region: "all",
        price: "all",
    };
    const [styleShow, setStyleShow] = useState(1);
    const [originProducts, setOriginProducts] = useState(products);
    const [flag, setFlag] = useState(false);
    const [clone, setClone] = useState([]);
    const [productsData, setProductsData] = useState(originProducts);
    const [condition, setCondition] = useState(initialFilter);
    const [sort, setSort] = useState("newest");
    const [searchValue, setSearchValue] = useState("");
    const [check, setCheck] = useState(false);
    const _changeFilter = (key) => (e) => {
        setCondition((prev) => ({ ...prev, [key]: e.target.value }));
    };
    const _onChangeCheckBox = (key) => (e) => {
        if (e.target.min !== e.target.max) {
            setCondition((prev) => ({
                ...prev,
                [key]: {
                    min: +e.target.min,
                    max: +e.target.max,
                },
            }));
        } else {
            setCondition((prev) => ({
                ...prev,
                [key]: "all",
            }));
        }
    };
    const _handleChangeStyleShow = (index) => setStyleShow(index);
    const _getValueSort = (e) => setSort(e.target.value);
    const _handleSortByTime = useCallback(
        (arr) => {
            let result = [];
            result = [
                ...arr.sort((a, b) => {
                    const dateA = new Date(parseISO(a.created_at)).getTime();
                    const dateB = new Date(parseISO(b.created_at)).getTime();
                    if (sort === "newest") {
                        return dateA - dateB;
                    }
                    if (sort === "oldest") {
                        return dateB - dateA;
                    }
                }),
            ];
            return result;
        },
        [sort]
    );
    const _handleChangeSearch = (e) => setSearchValue(e.target.value);
    const _searchApi = async (value) => {
        try {
            const formatValue = `/products?_where[0][title_contains]=${value}`;
            const fulLurl = getStrapiURL(formatValue);
            const res = await axios.get(fulLurl);
            const dataRes = await res.data;
            setProductsData(dataRes);
        } catch (error) {
            console.log(error);
        }
    };
    const _handleSubmitSearch = (e) => {
        e.preventDefault();
        setCheck(true);
        setFlag(true);
        if (searchValue.trim()) {
            router.push(`/projects?title=${searchValue}`, undefined, {
                shallow: true,
            });
        } else {
            router.push(`/projects`, undefined, {
                shallow: true,
            });
        }
    };
    useEffect(() => {
        setClone(originProducts);
        if (flag === true) {
            setClone(productsData);
        }
    }, [flag]);

    useEffect(() => {
        if (router.query && router.query?.title) {
            _searchApi(router.query.title);
            setSearchValue(router.query.title);
        } else {
            setProductsData(clone);

            setFlag(false);
        }
    }, [router.query]);
    useEffect(() => {
        if (check) {
            if (searchValue.trim()) {
                _searchApi(searchValue);
            } else {
                setProductsData(clone);
                setFlag(false);
            }
        }
        setCheck(false);
    }, [check]);
    useEffect(() => {
        const { categori, region, price } = condition;
        const filterDatas = [...originProducts];
        switch (true) {
            //default case show all value
            case categori === "all" && region === "all" && price === "all": {
                setProductsData(originProducts);
                break;
            }
            // filtered on price
            case categori === "all" && region === "all": {
                const result = filterDatas.filter((filterData) => {
                    return (
                        (filterData.price.from >= price.min &&
                            filterData.price.from < price.max) ||
                        (filterData.price.to <= price.max &&
                            filterData.price.to > price.min)
                    );
                });
                setProductsData(result);
                break;
            }
            // filtered on  categories
            case region === "all" && price === "all": {
                const result = filterDatas.filter((filterData) => {
                    const checkCategoriFilteredData =
                        filterData.categories.some(
                            (x) => x.name === condition.categori
                        );
                    return checkCategoriFilteredData && filterData;
                });
                setProductsData(result);
                break;
            }
            // filtered on region
            case categori === "all" && price === "all": {
                const result = filterDatas.filter((filterData) => {
                    const checkRegionFilteredData = filterData.regions.some(
                        (x) => x.title === region
                    );
                    return checkRegionFilteredData && filterData;
                });
                setProductsData(result);
                break;
            }
            // filtered on categori and region
            case price === "all": {
                const result = filterDatas.filter((filterData) => {
                    const checkCategoriFilteredData =
                        filterData.categories.some((x) => x.name === categori);
                    const checkRegionFilteredData = filterData.regions.some(
                        (x) => x.title === region
                    );
                    if (checkCategoriFilteredData && checkRegionFilteredData) {
                        return filterData;
                    }
                });
                setProductsData(result);
                break;
            }
            // filtered on categori and price
            case region === "all": {
                const result = filterDatas.filter((filterData) => {
                    const checkCategoriFilteredData =
                        filterData.categories.some((x) => x.name === categori);
                    if (
                        checkCategoriFilteredData &&
                        ((filterData.price.from >= price.min &&
                            filterData.price.from < price.max) ||
                            (filterData.price.to <= price.max &&
                                filterData.price.to > price.min))
                    ) {
                        return filterData;
                    }
                });
                setProductsData(result);
                break;
            }
            // filtered on price and region

            case categori === "all": {
                const result = filterDatas.filter((filterData) => {
                    const checkRegionFilteredData = filterData.regions.some(
                        (x) => x.title === region
                    );
                    if (
                        checkRegionFilteredData &&
                        ((filterData.price.from >= price.min &&
                            filterData.price.from < price.max) ||
                            (filterData.price.to <= price.max &&
                                filterData.price.to > price.min))
                    ) {
                        return filterData;
                    }
                });
                setProductsData(result);
                break;
            }
            // filtered on categori and region and price

            default:
                {
                    const result = filterDatas.filter((filterData) => {
                        const checkCategoriFilteredData =
                            filterData.categories.some(
                                (x) => x.name === categori
                            );
                        const checkRegionFilteredData = filterData.regions.some(
                            (x) => x.title === region
                        );
                        if (
                            checkCategoriFilteredData &&
                            checkRegionFilteredData &&
                            ((filterData.price.from >= price.min &&
                                filterData.price.from < price.max) ||
                                (filterData.price.to <= price.max &&
                                    filterData.price.to > price.min))
                        ) {
                            return filterData;
                        }
                    });
                    setProductsData(result);
                }
                break;
        }
    }, [condition]);
    useEffect(() => {
        const cloneProducts = [...productsData];
        const result = _handleSortByTime(cloneProducts, "new");

        setProductsData(result);
    }, [sort, _handleSortByTime]);
    return (
        <section className="bg-light products">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-lg-12 wow slideInDown animated">
                        <div className="top-filter pb-15 border-bottom-1-gray">
                            <div className="row">
                                <div className="col-md-3 col-lg-6 col-xl-7">
                                    <label>
                                        Tổng số có {productsData.length} kết quả{" "}
                                    </label>
                                </div>
                                <div className="col-md-9 col-lg-6 col-xl-5">
                                    <div className="row">
                                        <div className="col-md-8 col-lg-7">
                                            <form>
                                                <div className="form-group d-flex mb-0">
                                                    <label className="w-50">
                                                        Short By :
                                                    </label>
                                                    <div className="select-wrapper position-relative w-100">
                                                        <select
                                                            className="select form-control"
                                                            onChange={
                                                                _getValueSort
                                                            }
                                                        >
                                                            <option value="newest">
                                                                Newest
                                                            </option>
                                                            <option value="oldest">
                                                                Oldest
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-4 col-lg-5">
                                            <ul
                                                className="nav nav-tabs border-0 float-right navbar-tab-view mt-sm-15"
                                                id="myTab"
                                                role="tablist"
                                                style={{ lineHeight: 20 }}
                                            >
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link active"
                                                        id="home-tab"
                                                        data-toggle="tab"
                                                        onClick={() => {
                                                            _handleChangeStyleShow(
                                                                1
                                                            );
                                                        }}
                                                    >
                                                        <i
                                                            className="fa fa-th-large"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        id="contact-tab"
                                                        data-toggle="tab"
                                                        onClick={() => {
                                                            _handleChangeStyleShow(
                                                                2
                                                            );
                                                        }}
                                                    >
                                                        <i
                                                            className="fa fa-th"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        id="profile-tab"
                                                        data-toggle="tab"
                                                        onClick={() => {
                                                            _handleChangeStyleShow(
                                                                3
                                                            );
                                                        }}
                                                    >
                                                        <i
                                                            className="fa fa-list"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className=" adbanced-form-two  bg-white  px-30 mt-30">
                            <div className="row ">
                                <div className="form-group col-lg-12 pt-15 wow slideInDown animated">
                                    <label>Tìm kiếm dự án: </label>
                                    <div className=" position-relative mt-5">
                                        <form
                                            className="news-letter"
                                            onSubmit={_handleSubmitSearch}
                                        >
                                            <div className="form-group position-relative">
                                                <input
                                                    className=" search form-control"
                                                    type="search"
                                                    placeholder="Tên dự án"
                                                    value={searchValue}
                                                    onChange={
                                                        _handleChangeSearch
                                                    }
                                                />
                                                <button
                                                    type="submit"
                                                    className="bg-gray color-secondary"
                                                >
                                                    <i className="fa fa-paper-plane" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form
                            className="adbanced-form-two amenities-list bg-white  px-30  "
                            style={{ paddingBottom: 0 }}
                        >
                            <div className="row">
                                <div className="form-group col-lg-12 pt-15 wow slideInDown animated">
                                    <label>Loại nhà</label>
                                    <div className="select-wrapper position-relative mt-5">
                                        <select
                                            className="select form-control"
                                            onChange={_changeFilter("categori")}
                                        >
                                            <option value="all">Tất cả</option>
                                            {categories.map((category) => (
                                                <option
                                                    key={category.id}
                                                    value={category.name}
                                                >
                                                    {category.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group col-lg-12 pt-15 wow slideInUp animated">
                                    <label>Khu vực</label>
                                    <div className="select-wrapper position-relative">
                                        <select
                                            className="select form-control"
                                            onChange={_changeFilter("region")}
                                        >
                                            <option value="all">Tất cả</option>
                                            {regions.map((region) => (
                                                <option
                                                    key={region.id}
                                                    value={region.title}
                                                >
                                                    {region.title}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group col-lg-12 pt-15 mb-0 wow slideInDown animated">
                                    <label>Mức Giá</label>

                                    <ul className="list-bottom select-option">
                                        <li>
                                            <input
                                                id="feature0"
                                                className="d-none"
                                                type="radio"
                                                name="price"
                                                onChange={_onChangeCheckBox(
                                                    "price"
                                                )}
                                                min={"all"}
                                                max={"all"}
                                            />
                                            <label htmlFor="feature0">
                                                Tất cả
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                id="feature1"
                                                className="d-none"
                                                type="radio"
                                                name="price"
                                                onChange={_onChangeCheckBox(
                                                    "price"
                                                )}
                                                min={2000000000}
                                                max={4000000000}
                                            />
                                            <label htmlFor="feature1">
                                                2 tỉ - 4 tỉ
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                id="feature-2"
                                                className="d-none"
                                                type="radio"
                                                name="price"
                                                onChange={_onChangeCheckBox(
                                                    "price"
                                                )}
                                                min={4000000000}
                                                max={8000000000}
                                            />
                                            <label htmlFor="feature-2">
                                                4 tỉ - 8 tỉ
                                            </label>
                                        </li>
                                        <li>
                                            <input
                                                id="feature3"
                                                className="d-none"
                                                type="radio"
                                                name="price"
                                                onChange={_onChangeCheckBox(
                                                    "price"
                                                )}
                                                min={8000000000}
                                                max={10000000000}
                                            />
                                            <label htmlFor="feature3">
                                                8 tỷ - 10 tỷ
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-12 col-lg-8">
                        <div className="tab-content mt-md-50" id="myTabContent">
                            {styleShow === 1 && (
                                <div
                                    className="tab-pane fade show active"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className="row">
                                        {productsData.map((product, index) => {
                                            const {
                                                id,
                                                title,
                                                price,
                                                updated_at,
                                                image,
                                                address,
                                                information_product,
                                                labels
                                            } = product;
                                            return (
                                                <div className="col-md-12 col-lg-6 wow slideInDown animated">
                                                    <div className="property-item position-relative mt-30">
                                                        <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                                                            <img
                                                                src={getStrapiImage(
                                                                    image
                                                                )}
                                                                alt="image"
                                                            />
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
                                                                        title="Compare"
                                                                        href="#"
                                                                    >
                                                                        <i
                                                                            className="fa fa-random"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                            <div className="meta-property icon-primary color-white z-index-1">
                                                                <ul>
                                                                    <li>
                                                                        <i className="fa fa-calendar" />{" "}
                                                                        {formatDate(
                                                                            updated_at
                                                                        )}
                                                                    </li>
                                                                    <li>
                                                                        <i className="fa fa-user" />{" "}
                                                                        Admin
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="property-content bg-white pt-30 pb-50 px-30">
                                                            <a
                                                                className="color-secondary mb-5"
                                                                href="single-property.html"
                                                            >
                                                                <h4>{title}</h4>
                                                            </a>
                                                            <span className="address icon-primary f-14">
                                                                <i className="fa fa-map-marker" />
                                                                {address}
                                                            </span>
                                                            <ul className="about-property list-half icon-primary d-table f-14 mb-30 mt-20">
                                                                {information_product.map(
                                                                    (info) => {
                                                                        const {
                                                                            value,
                                                                            utility,
                                                                        } = info;
                                                                        console.log(
                                                                            information_product
                                                                        );
                                                                        const {
                                                                            title,
                                                                            image,
                                                                        } =
                                                                            utility ||
                                                                            {};
                                                                        return (
                                                                            <li>
                                                                                {/* <i className="flaticon-fit-screen" /> */}
                                                                                <img
                                                                                    src={getStrapiImage(
                                                                                        image
                                                                                    )}
                                                                                    className="flaticon-fit-screen"
                                                                                    alt=""
                                                                                    style={{
                                                                                        display:
                                                                                            "inline-block",
                                                                                        width: "22%",
                                                                                        marginRight:
                                                                                            "0.3rem",
                                                                                    }}
                                                                                />
                                                                                {
                                                                                    value
                                                                                }{" "}
                                                                                {
                                                                                    title
                                                                                }
                                                                            </li>
                                                                        );
                                                                    }
                                                                )}
                                                            </ul>
                                                            <div className="property-cost color-white list-half w-100">
                                                                <ul>
                                                                    <li></li>
                                                                    <li>
                                                                        {
                                                                            price.from
                                                                        }{" "}
                                                                        tỷ -{" "}
                                                                        {
                                                                            price.to
                                                                        }{" "}
                                                                        tỷ
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                            {styleShow === 2 && (
                                <div
                                    className="tab-pane fade show active"
                                    id="contact"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                >
                                    <div className="row">
                                        {productsData.map((product, index) => {
                                            const {
                                                id,
                                                title,
                                                price,
                                                image,
                                                address,
                                                information_product,
                                            } = product;
                                            return (
                                                <div
                                                    key={id}
                                                    className={`col-md-12 col-lg-6 wow ${
                                                        index % 2 === 0
                                                            ? "slideInDown"
                                                            : "slideInUp"
                                                    } animated`}
                                                >
                                                    <div className="property-thumbnail mt-30">
                                                        <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                                                            <img
                                                                src={getStrapiImage(
                                                                    image
                                                                )}
                                                                alt="image"
                                                            />
                                                            <div className="thumbnail-content z-index-1 color-white-a color-white">
                                                                {/* <span className="thum-category category-1 bg-secondary color-white z-index-1 px-15">
                                  For Sale
                                </span> */}
                                                                <ul className="hover-option position-absolute icon-white z-index-1">
                                                                    <li>
                                                                        <a
                                                                            data-toggle="tooltip"
                                                                            data-placement="top"
                                                                            title="Wishlist"
                                                                            href="#"
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
                                                                            title="Compare"
                                                                            href="#"
                                                                        >
                                                                            <i
                                                                                className="fa fa-random"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <div className="hover-content py-30 px-20 overlay-hover-gradient">
                                                                    <div className="thumbnail-title z-index-1 position-relative">
                                                                        <span className="thumbnail-price bg-white color-secondary px-15 mb-10 d-table">
                                                                            {`${
                                                                                price.from
                                                                            } -  ${formatMoney(
                                                                                price.to
                                                                            )}`}
                                                                        </span>
                                                                        <a
                                                                            className="color-secondary mb-5"
                                                                            href="single-property.html"
                                                                        >
                                                                            <h4>
                                                                                {
                                                                                    title
                                                                                }
                                                                            </h4>
                                                                        </a>
                                                                        <span className="address icon-primary f-14">
                                                                            <i className="fa fa-map-marker" />
                                                                            {
                                                                                address
                                                                            }
                                                                        </span>
                                                                        <ul className="about-property icon-primary d-table f-14 z-index-1 position-relative">
                                                                            {information_product.map(
                                                                                (
                                                                                    info
                                                                                ) => {
                                                                                    const {
                                                                                        value,
                                                                                        utility,
                                                                                    } =
                                                                                        info;
                                                                                    const {
                                                                                        title,
                                                                                        image,
                                                                                    } =
                                                                                        utility;
                                                                                    return (
                                                                                        <li>
                                                                                            <span className="color-primary">
                                                                                                {
                                                                                                    value
                                                                                                }
                                                                                            </span>{" "}
                                                                                            {
                                                                                                title
                                                                                            }
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
                                                </div>
                                            );
                                        })}
                                        {/* <div className="col-lg-12 wow slideInDown animated">
                    <div className="mx-auto d-table">
                      <ul className="pagination mt-50">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Prev
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link active" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                                    </div>
                                </div>
                            )}
                            {styleShow === 3 && (
                                <div
                                    className="tab-pane fade show active"
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                >
                                    <div className="row">
                                        {productsData.map((product, index) => {
                                            const {
                                                id,
                                                title,
                                                price,
                                                image,
                                                address,
                                                updated_at,
                                                information_product,
                                            } = product;
                                            return (
                                                <div
                                                    key={id}
                                                    className={`col-md-12 col-lg-12 wow ${
                                                        index % 2 !== 0
                                                            ? "slideInDown"
                                                            : "slideInUp"
                                                    } animated`}
                                                >
                                                    <div className="property-list mt-30">
                                                        <div className="property-item d-flex">
                                                            <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                                                                <img
                                                                    src={getStrapiImage(
                                                                        image
                                                                    )}
                                                                    alt="image"
                                                                />
                                                                <ul className="hover-option position-absolute icon-white z-index-1">
                                                                    <li>
                                                                        <a
                                                                            data-toggle="tooltip"
                                                                            data-placement="top"
                                                                            title="Wishlist"
                                                                            href="#"
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
                                                                            title="Compare"
                                                                            href="#"
                                                                        >
                                                                            <i
                                                                                className="fa fa-random"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <div className="meta-property icon-primary color-white z-index-1">
                                                                    <ul>
                                                                        <li>
                                                                            <i className="fa fa-calendar" />{" "}
                                                                            {formatDate(
                                                                                updated_at
                                                                            )}
                                                                        </li>
                                                                        <li>
                                                                            <i className="fa fa-user" />{" "}
                                                                            Admin
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="property-content bg-white pt-30 pb-50 px-30 position-relative">
                                                                <a
                                                                    className="color-secondary mb-5"
                                                                    href="single-property.html"
                                                                >
                                                                    <h4>
                                                                        {title}
                                                                    </h4>
                                                                </a>
                                                                <span className="address icon-primary f-14">
                                                                    <i className="fa fa-map-marker" />
                                                                    {address}
                                                                </span>
                                                                <ul
                                                                    className="about-property icon-primary  mt-20"
                                                                    style={{
                                                                        display:
                                                                            "flex",
                                                                        flexWrap:
                                                                            "wrap",
                                                                    }}
                                                                >
                                                                    {information_product.map(
                                                                        (
                                                                            info
                                                                        ) => {
                                                                            const {
                                                                                value,
                                                                                utility,
                                                                            } =
                                                                                info;
                                                                            const {
                                                                                title,
                                                                                image,
                                                                            } =
                                                                                utility;
                                                                            return (
                                                                                <li
                                                                                    style={{
                                                                                        width: "41%",
                                                                                    }}
                                                                                >
                                                                                    {/* <i className="flaticon-fit-screen" /> */}
                                                                                    <img
                                                                                        src={getStrapiImage(
                                                                                            image
                                                                                        )}
                                                                                        className="flaticon-fit-screen"
                                                                                        alt=""
                                                                                        style={{
                                                                                            display:
                                                                                                "inline-block",
                                                                                            // flex: "0 0 100%",
                                                                                            width: "20%",
                                                                                            marginRight:
                                                                                                "0.3rem",
                                                                                        }}
                                                                                    />
                                                                                    {
                                                                                        value
                                                                                    }{" "}
                                                                                    {
                                                                                        title
                                                                                    }
                                                                                </li>
                                                                            );
                                                                        }
                                                                    )}
                                                                </ul>
                                                                {/* <span className="tags color-gray mb-30 d-block">
                                  Appartment, Bar, Hotel, House
                                </span> */}
                                                                <div className="property-cost color-white list-half w-100">
                                                                    <ul>
                                                                        <li
                                                                            style={{
                                                                                width: "30%",
                                                                            }}
                                                                        ></li>
                                                                        <li
                                                                            style={{
                                                                                width: "70%",
                                                                                padding: 0,
                                                                                textAlign:
                                                                                    "center",
                                                                                display:
                                                                                    "flex",
                                                                                alignItems:
                                                                                    "center",
                                                                            }}
                                                                        >
                                                                            <p>
                                                                                {`${formatMoney(
                                                                                    price.from
                                                                                )} -  ${formatMoney(
                                                                                    price.to
                                                                                )}`}
                                                                            </p>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}

                                        {/* <div className="col-lg-12 wow slideInDown animated">
                    <div className="mx-auto d-table">
                      <ul className="pagination mt-50">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Prev
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link active" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductsList;
