import Head from "next/head";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import PreLoader from "../components/PreLoader";
import Banner1 from "../components/sections/Banner1";
import About1 from "../components/sections/About1";
import Menu1 from "../components/sections/Menu1";
import MobileApp1 from "../components/sections/MobileApp1";
import BookTable1 from "../components/sections/BookTable1";
import Team1 from "../components/sections/Team1";
import Testimonia1 from "../components/sections/Testimonia1";
import Blog1 from "../components/sections/Blog1";
import {
    getProducts,
    getCategories,
    getHomePage,
    fetchAPI,
} from "../utils/api";
import Banner2 from "../components/sections/Banner2";
import Menu2 from "../components/sections/Menu2";
import About2 from "../components/sections/About2";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import _ from "lodash";
import ModalPromotion from "../components/ModalPromotion";
import { getStrapiImage, getStrapiMedia } from "../utils/medias";

export default function Home({ homePage, categories }) {
    const router = useRouter();
    const [modalPromotionData, setModalPromotionData] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const { $ } = window;
            $("#slider").layerSlider({
                sliderVersion: "6.2.1",
                type: "fullwidth",
                responsiveUnder: 0,
                layersContainer: 1200,
                maxRatio: 1,
                parallaxScrollReverse: true,
                hideUnder: 0,
                hideOver: 100000,
                skin: "v5",
                showBarTimer: false,
                showCircleTimer: false,
                thumbnailNavigation: "disabled",
                allowRestartOnResize: false,
                skinsPath: "images/slider/skins/",
                height: 900,
            });
        }
    }, []);

    // if (router.isFallback) {
    //     return <PreLoader />;
    // }

    return (
        <>
            <Head>
                <title>Ở đâu bán nhà</title>
                <meta
                    name="description"
                    content="Mua nhà ở đâu? Mua nhà ở đây"
                />
                <meta name="title" content="Ở đâu bán nhà" />
                <meta
                    name="image"
                    content="/logo.png"
                />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <Banner2
                title={_.get(homePage, "title")}
                description={_.get(homePage, "description")}
                image_url={_.get(homePage, "image.url")}
            />
            <About1
                title={_.get(homePage, "aboutus.title")}
                subDescription={_.get(homePage, "aboutus.subDescription")}
                description={_.get(homePage, "aboutus.description")}
                image_url={_.get(homePage, "aboutus.image.url")}
                btnLink={_.get(homePage, "aboutus.btnLink")}
                btnText={_.get(homePage, "aboutus.btnText")}
            />
            {/* <Menu2 categories={categories} />
            <About2
                title={_.get(homePage, "aboutus2.title")}
                subDescription={_.get(homePage, "aboutus2.subDescription")}
                description={_.get(homePage, "aboutus2.description")}
                image_url1={_.get(homePage, "aboutus2.img1.url")}
                image_url2={_.get(
                    homePage,
                    "aboutus2.img2.formats.thumbnail.url"
                )}
                image_url3={_.get(
                    homePage,
                    "aboutus2.img3.formats.thumbnail.url"
                )}
                btnLink={_.get(homePage, "aboutus2.btnLink")}
                btnText={_.get(homePage, "aboutus2.btnText")}
            /> */}
        </>
    );
}

export async function getServerSideProps() {
    const [homePage, categories] = await Promise.all([
        getHomePage(),
        getCategories(),
    ]);
    return { props: { homePage, categories } };
}
