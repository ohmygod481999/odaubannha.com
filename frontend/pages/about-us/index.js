import React from "react";
import AboutUs from "../../components/AboutUs";
import { fetchAPI } from "../../utils/api";
import Social from "../../components/Social";
import Header from "../../components/Header";
function About({ aboutUsData, generalInfo }) {
  return (
    <div style={{ width: "100vw" }}>
      <Header generalInfo={generalInfo} />
      <AboutUs aboutUsData={aboutUsData} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const [aboutUsData, generalInfo] = await Promise.all([
    fetchAPI("/about-us"),
    fetchAPI("/general")
  ]);

  return {
    props: {
      aboutUsData,
      generalInfo
    }
  };
};
export default About;
