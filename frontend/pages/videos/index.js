import React from "react";
import Video from "../../components/sections/Video";
import { fetchAPI, getVideos } from "../../utils/api";
import Banner from "../../components/Banner";
import Head from "next/head";
import Social from "../../components/Social";
function Videos({ videos, videoBanner, generalInfo }) {
  return (
    <div style={{ width: "100vw" }}>
      <Head>
        <title>{videoBanner.title}</title>
      </Head>
      <Banner bannerData={videoBanner} />
      <Video videos={videos} />
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
  const [videos, videoBanner, generalInfo] = await Promise.all([
    getVideos(),
    fetchAPI("/video-banner"),
    fetchAPI("/general")
  ]);
  return {
    props: {
      videos,
      videoBanner,
      generalInfo
    }
  };
};
export default Videos;
