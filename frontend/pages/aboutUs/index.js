import React from "react";
import AboutUs from "../../components/AboutUs";
import { fetchAPI } from "../../utils/api";
import Social from "../../components/Social";
function About({ aboutUsData, generalInfo }) {
  return (
    <div style={{ width: "100vw" }}>
      <AboutUs aboutUsData={aboutUsData} />
      <Social
        facebook={generalInfo.facebookUrl}
        instagram={generalInfo.instagramUrl}
        viber={generalInfo.viberUrl}
        zalo={generalInfo.zaloUrl}
      />
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
