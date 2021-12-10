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
  fetchAPI
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
import HightlightProject from "../components/sections1/HightlightProject";
import Partner from "../components/sections1/Partner";
import Testimonial from "../components/sections1/Testimonial";
import Promotion from "../components/sections1/Promotion";
import Search from "../components/sections1/Search";
import Social from "../components/Social";

export default function Home({ homePage, categories, generalInfo }) {
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
        height: 900
      });

      $(".partnerss").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 30,
        dots: false,
        nav: false,
        navText: [
          '<span class="fa fa-long-arrow-left"></span>',
          '<span class="fa fa-long-arrow-right"></span>'
        ],
        responsive: {
          0: {
            items: 2
          },
          600: {
            items: 2
          },
          768: {
            items: 4
          },
          1024: {
            items: 3
          },
          1200: {
            items: 3
          }
        }
      });

      $(".neighborhoodss").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: [
          '<span class="fa fa-long-arrow-left"></span>',
          '<span class="fa fa-long-arrow-right"></span>'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          767: {
            items: 2
          },
          1024: {
            items: 2
          },
          1200: {
            items: 3
          }
        }
      });
    }
  }, []);

  // if (router.isFallback) {
  //     return <PreLoader />;
  // }

  return (
    <div style={{ width: "100vw" }}>
      <Head>
        <title>{generalInfo && generalInfo.title}</title>
        <meta
          name="description"
          content={generalInfo && generalInfo.meta_description}
        />
        <meta name="title" content={generalInfo && generalInfo.meta_title} />
        <meta
          name="image"
          content={generalInfo && getStrapiImage(generalInfo.meta_image)}
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <ModalPromotion />
      {/* <Search /> */}
      <Social
        facebook={generalInfo.facebookUrl}
        youtube={generalInfo.youtubeUrl}
        viber={generalInfo.viberUrl}
        zalo={generalInfo.zaloUrl}
      />
      <Banner2 bannerData={homePage} />
      <About1 homePage={homePage} />
      <Promotion homePage={homePage} />
      <HightlightProject HightlightProject={homePage} />
      <Testimonial feedback={homePage} />
      <Partner Partners={homePage} />
    </div>
  );
}

export async function getServerSideProps() {
  const [homePage, categories, generalInfo] = await Promise.all([
    getHomePage(),
    getCategories(),
    fetchAPI("/general")
  ]);
  return { props: { homePage, categories, generalInfo } };
}
