import React from "react";
import Hiring from "../../components/Hiring";
import { fetchAPI } from "../../utils/api";
import Social from "../../components/Social";
function Recruitement({ hiringData, generalInfo }) {
  return (
    <div style={{ width: "100vw" }}>
      <Hiring hiringData={hiringData} />
      <Social
        facebook={generalInfo.facebookUrl}
        youtube={generalInfo.youtubeUrl}
        viber={generalInfo.viberUrl}
        zalo={generalInfo.zaloUrl}
      />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const [hiringData, generalInfo] = await Promise.all([
    fetchAPI("/hiring"),
    fetchAPI("/general")
  ]);

  return {
    props: {
      hiringData,
      generalInfo
    }
  };
};
export default Recruitement;
