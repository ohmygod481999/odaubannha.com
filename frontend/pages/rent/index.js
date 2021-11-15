import React from "react";
import Banner from "../../components/Banner";
import { fetchAPI } from "../../utils/api";
import Rents from "../../components/Rents";
function Rent({ rentData }) {
  return (
    <div>
      <Banner bannerData={rentData}></Banner>
      <Rents rentData={rentData} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const rentData = await fetchAPI("/rent");

  return {
    props: {
      rentData
    }
  };
};
export default Rent;
