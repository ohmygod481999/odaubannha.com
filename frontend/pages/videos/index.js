import React from "react";
import Video from "../../components/sections/Video";
import { fetchAPI, getVideos } from "../../utils/api";
import Breadcrumb from "../../components/Breadcrumb";
import Banner from "../../components/Banner";

function Videos({ videos, videoBanner }) {
  console.log(videoBanner);
  return (
    <div>
      <Banner bannerData={videoBanner} />
      <Video videos={videos} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const [videos, videoBanner] = await Promise.all([
    getVideos(),
    fetchAPI("/video-banner")
  ]);
  return {
    props: {
      videos,
      videoBanner
    }
  };
};
export default Videos;
