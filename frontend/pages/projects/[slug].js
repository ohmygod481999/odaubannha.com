import BlogDetail from "../../components/sections/BlogDetail";
import { getArticle } from "../../services/article.service";
import Head from "next/head";
import { getStrapiImage } from "../../utils/medias";
import { fetchAPI, getProduct, postDataForm } from "../../utils/api";
import Social from "../../components/Social";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import { useEffect, useState } from "react";
import { convertMarkdownToHtml, formatDate } from "../../utils/common";
import { useForm } from "react-hook-form";
import { FacebookShareButton } from "react-share";
import GoogleMapReact from "google-map-react";

function DetailProject({ product = {}, latestProjects, generalInfo }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [isLoading, setIsLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState(null);

    const onSubmit = async (data) => {
        const { email, name, phone, message } = data;
        setIsLoading(true);
        const response = await postDataForm({
            name,
            email,
            phone,
            interested_products: [
                {
                    id: product.id,
                },
            ],
            message,
        });
        if (response && response.created_at) {
            setResponseMessage("Thành công");
        } else {
            setResponseMessage("Thất bại");
        }
        setIsLoading(false);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            const { $ } = window;
            $(".slide-1").owlCarousel({
                loop: true,
                autoplay: true,
                smartSpeed: 1500,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                margin: 0,
                dots: true,
                nav: false,
                navText: [
                    '<span class="fa fa-long-arrow-left"></span>',
                    '<span class="fa fa-long-arrow-right"></span>',
                ],
                responsive: {
                    0: {
                        items: 1,
                    },
                },
            });
        }
    }, []);

    return (
        <div style={{ width: "100vw" }}>
            <Head>
                <title>{product.title}</title>
                <meta property="og:title" content={product.title} key="title" />
                <meta
                    property="og:description"
                    content={product.description}
                    key="description"
                />
                <meta
                    property="og:image"
                    content={
                        product.image
                            ? getStrapiImage(product.image)
                            : "/assets/images/blog_bg.jpg"
                    }
                    key="image"
                />
            </Head>
            <Header generalInfo={generalInfo} />
            <Banner
                bannerData={{
                    title: product.title,
                    subtitle: product.subdescription,
                    image: product.image
                        ? [product.image]
                        : "/assets/images/blog_bg.jpg",
                }}
            />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <div className="mb-30">
                                <div className="row">
                                    <div className="col-md-12 col-lg-8 wow slideInRight animated">
                                        <div className="single-property position-relative">
                                            <span className="bg-secondary color-white z-index-1 px-15 py-5 mr-20">
                                                For Sale
                                            </span>
                                            <strong className="color-primary f-20">
                                                {product.price.from} tỷ -{" "}
                                                {product.price.to} tỷ
                                            </strong>
                                            <h3 className="color-secondary mt-15">
                                                {product.title}
                                            </h3>
                                            <span className="address icon-primary f-14 mt-5">
                                                <i className="fa fa-map-marker" />
                                                {product.address}
                                            </span>
                                            <div className=" d-flex f-14 mt-15">
                                                {product.information_product.map(
                                                    (info) => {
                                                        const {
                                                            value,
                                                            utility,
                                                        } = info;
                                                        const { title, image } =
                                                            utility || {};
                                                        return (
                                                            <div>
                                                                <img
                                                                    src={getStrapiImage(
                                                                        image
                                                                    )}
                                                                    alt=""
                                                                    style={{
                                                                        display:
                                                                            "inline-block",
                                                                        width: "10%",
                                                                        marginRight:
                                                                            "0.3rem",
                                                                    }}
                                                                />
                                                                {value} {title}
                                                            </div>
                                                        );
                                                    }
                                                )}
                                                {/* <li><i className="flaticon-fit-screen" />300 sqft</li>
                                    <li><i className="flaticon-hotel" />5 Bedrooms</li>
                                    <li><i className="flaticon-bathtub" />4 Bathrooms</li>
                                    <li><i className="flaticon-garage" />2 Garage</li> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-4 wow slideInLeft animated">
                                        <div className="thumbnail-content float-right">
                                            <ul
                                                className="hover-option icon-white z-index-1 position-relative mt-md-30"
                                                style={{
                                                    opacity: 1,
                                                    top: 0,
                                                    right: 0,
                                                }}
                                            >
                                                <li>
                                                    <a
                                                        data-original-title="Share on Facebook"
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        href="#"
                                                    >
                                                        {typeof window !==
                                                            "undefined" && (
                                                            <FacebookShareButton
                                                                url={`${window.location.origin}/projects/${product.slug}`}
                                                                style={{
                                                                    color: "black",
                                                                }}
                                                            >
                                                                <i
                                                                    className="fa fa-share-alt"
                                                                    aria-hidden="true"
                                                                />
                                                            </FacebookShareButton>
                                                        )}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        data-toggle="tooltip"
                                                        data-placement="top"
                                                        title
                                                        href="#"
                                                        data-original-title="Print"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            window.print();
                                                        }}
                                                    >
                                                        <i
                                                            className="fa fa-print"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                            </ul>
                                            {/* Nav tabs */}
                                            <ul
                                                className="nav nav-tabs border-0 float-right navbar-tab-view mt-15 sm-mt-0"
                                                role="tablist"
                                                style={{ lineHeight: "20px" }}
                                            >
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link active"
                                                        id="home-tab"
                                                        data-toggle="tab"
                                                        href="#home"
                                                        role="tab"
                                                        aria-controls="home"
                                                        aria-selected="true"
                                                    >
                                                        <i
                                                            className="fa fa-file-image-o"
                                                            aria-hidden="true"
                                                        />
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        id="profile-tab"
                                                        data-toggle="tab"
                                                        href="#profile"
                                                        role="tab"
                                                        aria-controls="profile"
                                                        aria-selected="false"
                                                    >
                                                        <i className="flaticon-location" />
                                                    </a>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        id="messages-tab"
                                                        data-toggle="tab"
                                                        href="#messages"
                                                        role="tab"
                                                        aria-controls="messages"
                                                        aria-selected="false"
                                                    >
                                                        <i className="flaticon-street-view" />
                                                    </a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid wow slideInUp animated">
                    <div className="row d-flow-root">
                        <div className="product-slider">
                            <div className="tab-content">
                                <div
                                    className="tab-pane active position-relative"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div className="service-images owl-carousel slide-1 dot-on-slider">
                                        {(product.detail_images || []).map(
                                            (image) => (
                                                <img
                                                    src={getStrapiImage(image)}
                                                    alt="image"
                                                />
                                            )
                                        )}
                                        {/* <img
                                            src="/images/property/34.jpg"
                                            alt="image"
                                        />
                                        <img
                                            src="/images/property/32.jpg"
                                            alt="image"
                                        /> */}
                                    </div>
                                </div>
                                <div
                                    className="tab-pane"
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                >
                                    <div
                                        style={{
                                            height: "100vh",
                                            width: "100%",
                                        }}
                                    >
                                        <div style={{ width: "100%" }}>
                                            <iframe
                                                width="100%"
                                                height={600}
                                                frameBorder={0}
                                                scrolling="no"
                                                marginHeight={0}
                                                marginWidth={0}
                                                src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${product.address}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                                            >
                                                &lt;a
                                                href="https://www.gps.ie/sport-gps/"&gt;swimming
                                                watch&lt;/a&gt;
                                            </iframe>
                                        </div>

                                        {/* {product.latlng && (
                                            <GoogleMapReact
                                                bootstrapURLKeys={{
                                                    key: "AIzaSyC-JYD44Kkwvzp4tuax6gb_0sHcIDbwOjc",
                                                }}
                                                defaultCenter={{
                                                    lat: product.latlng.lat,
                                                    lng: product.latlng.lng,
                                                }}
                                                defaultZoom={
                                                    product.latlng.zoom || 15
                                                }
                                            >
                                            </GoogleMapReact>
                                        )} */}
                                    </div>
                                </div>
                                {/* <div
                                    className="tab-pane"
                                    id="messages"
                                    role="tabpanel"
                                    aria-labelledby="messages-tab"
                                >
                                    <div className="mapimageview">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!4v1599036304356!6m8!1m7!1sqKj5Ao7cdLkLmIAAieQWgw!2m2!1d-37.78266616894371!2d145.0232453320753!3f99.89449149743196!4f-13.159907315623357!5f0.7820865974627469"
                                            height={600}
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            aria-hidden="false"
                                            tabIndex={0}
                                        />
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="text-area mt-50 wow slideInLeft animated">
                                <h3 className="color-secondary line-bottom pb-15 mb-20">
                                    Mô tả dự án
                                </h3>
                                <p className="mb-3">{product.description}</p>
                                {/* <div className="agent-more-details color-secondary-a">
                            <a className="color-secondary position-relative plus-minus my-15 pl-15 d-block" data-toggle="collapse" href="#multiCollapse1" role="button" aria-expanded="false" aria-controls="multiCollapse1">More Details</a>
                            <div className="collapse" id="multiCollapse1">
                            <p>Ullamcorper dui commodo eleifend at pellentesque molestie, curabitur metus natoque felis erat consectetue cum accumsan rutrum dolor sodales semper auctor aptent metus nibh. Risus est etiam Ornar feugiat curabit sapien quam lacus, dapibus placerat hendrerit netus aenean ipsum quam consequat vivamus curabitur preta mauris, volutpat erat cum lorem, suscipit natoque eleifend sapien magnis bibendum cras lectus velit natoque in laoreet magna tempor neque. Venenatis mollis fringilla ultricies lorem mus ante mus parturient sapien nisi est leo conubia id libero massa.</p>
                            <p className="mt-15">Fames curabitur aenean maecenas tortor odio nonummy bibendum lorem consequat posuere turpis parturie lorem integer erat iaculis mi velit enim potent penatibus hac pede. Morbi vehicula luctus sem vulputate tortor tincidunt sociis luctus cursus dolor dictum suscipit, auctor odio sociis et euismod lacus.</p>
                            <p className="my-15">Aliquam gravida hendrerit name enim phasellus molestie magnis vitae vivamus odio mattis lacinia. Tincidunt mollis Volutpat mi nostra volutpat quam consectetuer fames pal fermentum luctus phasellus augue placerat turpis facilisi tellus volutpat sodales arcu sociis erat, euismod curabitur natoque mollis, proin senectus porta ante. Nam habitant suscipit vehicula curae magnis eros velit nonummy curae non penatibus pretium fringilla felis augue iaculis cum cubilia non, augue turpis ullamcorper adipiscin class sociis potenti suspendisse enim tortor augue suspendisse pretium magnis fusce fusce mi accumsa. Aliquet ut volutpat diam inceptos. Turpis ultrices odio, dapibus Blandit. Sollicitudin auctor euismod Iaculis parturient.</p>
                            </div>
                        </div> */}
                            </div>
                            <div className="border-top-1-gray py-30 wow slideInRight animated">
                                <h3 className="color-secondary line-bottom pb-15 mb-20">
                                    Chi tiết dự án
                                </h3>
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <ul className="list-by-tag">
                                            {product.information_product.map(
                                                (info) => {
                                                    const { value, utility } =
                                                        info;
                                                    const { title, image } =
                                                        utility || {};
                                                    return (
                                                        <li>
                                                            {title} :{" "}
                                                            <span>{value}</span>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        {/* <ul className="list-by-tag hover-secondery-primary">
                                <li>Garages : <span>2</span></li>
                                <li>Rooms : <span>12</span></li>
                                <li>Area : <span> 3000 Sqft</span></li>
                                <li>Plot size : <span>300x200x300</span></li>
                                <li>Kitchens : <span>2</span></li>
                            </ul> */}
                                    </div>
                                </div>
                            </div>
                            <div className="border-top-1-gray py-30 wow slideInLeft animated">
                                <h3 className="color-secondary line-bottom pb-15 mb-20">
                                    Tiện ích
                                </h3>
                                <div className="row">
                                    <div className="col-md-12 col-lg-12">
                                        <ul className="single-property-amenities icon-primary my-20">
                                            {(product.amenities || []).map(
                                                (amenity) => (
                                                    <li>
                                                        <i
                                                            className="fa fa-check-square"
                                                            aria-hidden="true"
                                                        />{" "}
                                                        {amenity.title}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="border-top-1-gray py-30 wow slideInUp animated">
                                <h3 className="color-secondary line-bottom pb-15 mb-20">
                                    Video dự án
                                </h3>
                                {product.video && (
                                    <div
                                        className="fancy_style1 overlay_bg_20"
                                        style={{
                                            position: "relative",
                                            width: "100%",
                                            paddingBottom: "56,25%",
                                            height: "450px",
                                        }}
                                    >
                                        <iframe
                                            width="560"
                                            height="315"
                                            src={product.video.url}
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen
                                            style={{
                                                position: "absolute",
                                                top: "0",
                                                left: "0",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        ></iframe>
                                    </div>
                                )}
                            </div>
                            <div className="border-top-1-gray py-30 wow slideInDown animated">
                                <h3 className="color-secondary line-bottom pb-15 mb-20">
                                    Floor Plan
                                </h3>
                                <div
                                    id="accordion"
                                    className="accordion-style-two"
                                >
                                    {(product.floor_plans || []).map(
                                        (floor_plan, i) => {
                                            const id = floor_plan.title
                                                .split(" ")
                                                .join("_");
                                            return (
                                                <div className="card border-0 mb-10">
                                                    <div
                                                        className="st-top border-0 d-inline-block position-relative card-header p-0 bg-light"
                                                        id={id}
                                                    >
                                                        <button
                                                            className="d-block border-0 bg-gray px-30 py-15 w-100 text-left"
                                                            data-toggle="collapse"
                                                            data-target={`#${id}`}
                                                            aria-expanded="true"
                                                            aria-controls={id}
                                                        >
                                                            {floor_plan.title}
                                                        </button>
                                                    </div>
                                                    <div
                                                        id={`${id}`}
                                                        className={`collapse ${
                                                            i == 0 && "show"
                                                        }`}
                                                        aria-labelledby={id}
                                                        data-parent="#accordion"
                                                    >
                                                        <div className="card-body">
                                                            <div
                                                                className="p-3"
                                                                dangerouslySetInnerHTML={{
                                                                    __html: convertMarkdownToHtml(
                                                                        floor_plan.description
                                                                    ),
                                                                }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                            <div className="border-top-1-gray py-30 wow slideInRight animated">
                                <h3 className="color-secondary line-bottom pb-15 mb-20">
                                    What's Nearby
                                </h3>
                                {product.nearby &&
                                    product.nearby.map((nearby) => (
                                        <>
                                            <h5 className="color-dark mt-20">
                                                {nearby.title}
                                            </h5>
                                            <hr />
                                            {nearby.places.map((place) => (
                                                <div className="single-review mt-10 d-table w-100">
                                                    <p>{place.title}</p>
                                                </div>
                                            ))}
                                        </>
                                    ))}
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="sidebar-widget bg-white mt-50 shadow py-40 px-30 wow slideInUp animated">
                                <h3 className="color-secondary line-bottom pb-15 mb-20">
                                    Contact an Agent
                                </h3>
                                {/* <div className="d-flex">
                            <div className="contact-agent-image mr-20 float-left"><img src="images/team/1.jpg" className="rounded-circle" alt="images" /></div>
                            <div className="align-self-center color-gray">
                            <h6 className="d-block mb-1 w-100 color-secondary">Andrew Gunservice</h6>
                            <p>fresher@info.com</p>
                            <p> (012) 234 567 890</p>
                            </div>
                        </div> */}
                                <form className="mt-30">
                                    <div className="row">
                                        <div className="form-group col-md-12">
                                            <input
                                                {...register("name", {
                                                    required: true,
                                                })}
                                                className="form-control bg-gray"
                                                placeholder="Tên của bạn"
                                            />
                                            {errors.name?.type ===
                                                "required" && (
                                                <div class="invalid-feedback d-block">
                                                    Name is required
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input
                                                {...register("phone", {
                                                    required: true,
                                                })}
                                                className="form-control bg-gray"
                                                placeholder="Số điện thoại"
                                            />
                                            {errors.phone?.type ===
                                                "required" && (
                                                <div class="invalid-feedback d-block">
                                                    Phone is required
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group col-md-12">
                                            <input
                                                {...register("email", {
                                                    required: true,
                                                    pattern:
                                                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                })}
                                                type="email"
                                                className="form-control bg-gray"
                                                placeholder="Email"
                                            />
                                            {errors.email?.type ===
                                                "required" && (
                                                <div class="invalid-feedback d-block">
                                                    Email is required
                                                </div>
                                            )}
                                            {errors.email?.type ===
                                                "pattern" && (
                                                <div class="invalid-feedback d-block">
                                                    Email is invalid
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group col-md-12">
                                            <textarea
                                                {...register("message")}
                                                className="form-control bg-gray"
                                                rows={4}
                                                placeholder="Type Your Massage"
                                                defaultValue={""}
                                            />
                                        </div>
                                        <div className="form-group col-md-12">
                                            {responseMessage && (
                                                <div className="text-center">
                                                    Thành công
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-lg-12">
                                            <button
                                                onClick={handleSubmit(onSubmit)}
                                                className={`btn btn-primary w-100 ${
                                                    isLoading ? "disabled" : ""
                                                }`}
                                            >
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="sidebar-widget bg-white mt-50 shadow py-40 px-30 wow slideInDown animated">
                                <h3 className="color-secondary line-bottom pb-15 mb-20">
                                    Dự án mới
                                </h3>
                                <div className="">
                                    {latestProjects.map((product, index) => {
                                        const {
                                            id,
                                            title,
                                            price,
                                            updated_at,
                                            image,
                                            address,
                                            information_product,
                                            labels,
                                            slug,
                                        } = product;
                                        return (
                                            <div className="wow slideInDown animated">
                                                <div className="property-item position-relative mt-30">
                                                    <div className="property-img position-relative overflow-hidden overlay-secondary-4">
                                                        <img
                                                            src={getStrapiImage(
                                                                image
                                                            )}
                                                            alt="image"
                                                        />
                                                        {labels
                                                            ? labels
                                                                  .split(",")
                                                                  .map(
                                                                      (
                                                                          label,
                                                                          i
                                                                      ) => (
                                                                          <span
                                                                              className={`thum-category category-${
                                                                                  i +
                                                                                  1
                                                                              } bg-secondary color-white z-index-1 px-15`}
                                                                          >
                                                                              {
                                                                                  label
                                                                              }
                                                                          </span>
                                                                      )
                                                                  )
                                                            : null}

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
                                                    <div className="property-content bg-white pt-30 pb-50 ">
                                                        <a
                                                            className="color-secondary mb-5"
                                                            href={`/projects/${product.slug}`}
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
                                                                    {price.from}{" "}
                                                                    tỷ -{" "}
                                                                    {price.to}{" "}
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
                            {/* <div className="sidebar-widget bg-white mt-50 shadow py-40 px-30 wow slideInUp animated">
                        <h3 className="color-secondary line-bottom pb-15 mb-20">Mortgage Calculator</h3>
                        <ul className="list-by-tag">
                            <li>Total Amount <span>Your payment</span></li>
                            <li><strong className="color-primary f-20">$ 530,000</strong> <span className="color-primary">$ 1,458</span></li>
                        </ul>
                        <ul className="list-by-tag mt-20">
                            <li>Total cost of loan <span>$ 610,718</span></li>
                            <li>Total interest paid <span>$ 80,718</span></li>
                            <li>Payment <span>Monthly</span></li>
                            <li>Mortgage payment <span>$ 1,458</span></li>
                        </ul>
                        <form action="#" method="post" className="mt-20 border-top-1-gray pt-20 adbanced-form-two">
                            <div className="row">
                            <div className="form-group col-md-12">
                                <label>Total Amount </label>
                                <input type="text" className="form-control bg-gray" defaultValue="$ 530,000" />
                            </div>
                            <div className="form-group col-md-12">
                                <label>Down Payment </label>
                                <input type="text" className="form-control bg-gray" defaultValue="$ 0" />
                            </div>
                            <div className="form-group col-md-12">
                                <label>Interest Rate </label>
                                <input type="text" className="form-control bg-gray" defaultValue="% 2.5" />
                            </div>
                            <div className="form-group col-md-12">
                                <label>Loan Period</label>
                                <div className="select-wrapper position-relative">
                                <select className="select form-control has-val">
                                    <option>5 Years</option>
                                    <option>10 Years</option>
                                    <option>15 Years</option>
                                    <option>20 Years</option>
                                    <option>25 Years</option>
                                    <option>30 Years</option>
                                </select>
                                </div>
                            </div>
                            <div className="form-group col-md-12">
                                <label>Payment Preiod</label>
                                <div className="select-wrapper position-relative">
                                <select className="select form-control has-val">
                                    <option>Monthly</option>
                                    <option>Semi-Monthly</option>
                                    <option>Bi-Weekly</option>
                                    <option>Weekly</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-lg-12"><button type="submit" className="btn btn-primary w-100">Calculate</button></div>
                            </div>
                        </form>
                        </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DetailProject;

export async function getServerSideProps({ params }) {
    const [product, latestProjects, generalInfo] = await Promise.all([
        getProduct(params.slug),
        fetchAPI("/products?_limit=2&_sort=created_at:DESC"),
        fetchAPI("/general"),
    ]);
    console.log(latestProjects);
    return { props: { product, latestProjects, generalInfo } };
}
