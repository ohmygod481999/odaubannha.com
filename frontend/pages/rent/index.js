import React from "react";
import Banner from "../../components/Banner";
import { fetchAPI } from "../../utils/api";
import Rents from "../../components/Rents";
import Social from "../../components/Social";
import Header from "../../components/Header";
function Rent({ rentData, generalInfo }) {
  return (
    <div style={{ width: "100vw" }}>
      <Header generalInfo={generalInfo} />
      <Banner bannerData={rentData}></Banner>
      <Rents rentData={rentData} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const [rentData, generalInfo] = await Promise.all([
    fetchAPI("/rent"),
    fetchAPI("/general")
  ]);

  return {
    props: {
      rentData,
      generalInfo
    }
  };
};
export default Rent;
