import React from "react";
import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductsList";
import { fetchAPI } from "../../utils/api";
import Head from "next/head";

function Projects({ products, categories, regions, projectsBanner }) {
  return (
    <div style={{ width: "100vw" }}>
      <Head>
        <title>{projectsBanner.title}</title>
      </Head>
      <Banner bannerData={projectsBanner} />
      <ProductsList
        products={products}
        categories={categories}
        regions={regions}
      />
    </div>
  );
}
export const getServerSideProps = async () => {
  const [products, categories, regions, projectsBanner] = await Promise.all([
    fetchAPI("/products"),
    fetchAPI("/categories"),
    fetchAPI("/regions"),
    fetchAPI("/project-banner")
  ]);

  return {
    props: {
      products,
      categories,
      regions,
      projectsBanner
    }
  };
};
export default Projects;
