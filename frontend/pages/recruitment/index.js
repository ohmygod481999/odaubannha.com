import React from "react";
import Hiring from "../../components/Hiring";
import { fetchAPI } from "../../utils/api";

function Recruitement({ hiringData }) {
  return (
    <div>
      <Hiring hiringData={hiringData} />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const hiringData = await fetchAPI("/hiring");

  return {
    props: {
      hiringData
    }
  };
};
export default Recruitement;
