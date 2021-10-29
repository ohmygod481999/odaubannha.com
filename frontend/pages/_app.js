import "../styles/globals.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Script from "next/script";
import { Provider } from "react-redux";
import { store, wrapper } from "../redux/store";
import { getGeneral } from "../services/general.service";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
    return (
        // <Provider store={store}>
        <Layout>
            <Head>
                <link rel="stylesheet" href="css/bootstrap.min.css" />
                <link rel="stylesheet" href="css/style.css" />
                <link rel="stylesheet" href="css/animate.min.css" />
                <link rel="stylesheet" href="css/color.css" id="color-change" />
                <link rel="stylesheet" href="css/font-awesome.min.css" />
                <link rel="stylesheet" href="css/layerslider.css" />
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="fonts/flaticon/flaticon.css" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
            
            <Script src="js/jquery-v3.4.1.js" strategy="beforeInteractive"/>
            <Script src="js/greensock.js" strategy="beforeInteractive"/>
            <Script src="js/layerslider.transitions.js" strategy="beforeInteractive"/>
            <Script src="js/layerslider.kreaturamedia.jquery.js" strategy="beforeInteractive"/>
            <Script src="js/popper.min.js" strategy="beforeInteractive"/>
            <Script src="js/bootstrap.min.js" strategy="beforeInteractive"/>
            <Script src="js/tmpl.js" strategy="beforeInteractive"/>
            <Script src="js/jquery.dependClass-0.1.js" strategy="beforeInteractive"/>
            <Script src="js/draggable-0.1.js" strategy="beforeInteractive"/>  
            <Script src="js/jquery.slider.js" strategy="beforeInteractive"/>
            <Script src="js/owl.carousel.min.js" strategy="beforeInteractive"/>
            <Script src="js/wow.js" strategy="beforeInteractive"/>
            <Script src="js/jquery.cookie.js" strategy="beforeInteractive"/>
            <Script src="js/color-settings.js" strategy="beforeInteractive"/>
            <Script src="js/custom.js" strategy="beforeInteractive"/>
        </Layout>
        // </Provider>
    );
}

export default wrapper.withRedux(MyApp);
