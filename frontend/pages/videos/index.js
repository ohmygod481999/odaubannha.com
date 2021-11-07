import React from "react";
import Video from "../../components/sections/Video";
import { getVideos } from "../../utils/api";
import Breadcrumb from "../../components/Breadcrumb";

function Videos({ videos }) {
  return <Video videos={videos} />;
}
export const getServerSideProps = async () => {
  const videos = await getVideos();
  return {
    props: {
      videos
    }
  };
};
export default Videos;
