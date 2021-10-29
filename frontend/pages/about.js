import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Gallery1 from "../components/sections/Gallery1";
import AboutVideo from "../components/sections/AboutVideo";
import Feature1 from "../components/sections/Feature1";
import { getAbout } from "../services/about.service";

function About({ about }) {
    return (
        <>
            <Breadcrumb title={about.title} image={about.image} />
            <AboutVideo aboutwithvideo={about.aboutwithvideo} />
            <Gallery1 journey={about.journey} />
            <Feature1 commitment={about.commitment}/>
        </>
    );
}

export default About;

export async function getServerSideProps() {
    const about = await getAbout();
    return { props: { about } };
}
