import React from "react";
import Hiring from "../../components/Hiring";
import { fetchAPI } from "../../utils/api";
import Social from "../../components/Social";
import Header from "../../components/Header";
function Recruitement({ hiringData, generalInfo }) {
  return (
    <div style={{ width: "100vw" }}>
      <Header generalInfo={generalInfo} />
      <Hiring hiringData={hiringData} />
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
