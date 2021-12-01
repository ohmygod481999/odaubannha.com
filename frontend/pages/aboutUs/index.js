import React from "react";
import AboutUs from "../../components/AboutUs";
import { fetchAPI } from "../../utils/api";

function About({ aboutUsData }) {
  return <AboutUs aboutUsData={aboutUsData} />;
}
export const getServerSideProps = async () => {
  const aboutUsData = await fetchAPI("/about-us");

  return {
    props: {
      aboutUsData
    }
  };
};
export default About;
