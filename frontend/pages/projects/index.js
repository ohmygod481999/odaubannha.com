import React from "react";
import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductsList";
import { fetchAPI } from "../../utils/api";
import Head from "next/head";
import Social from "../../components/Social";
import Header from "../../components/Header";
function Projects({
  products,
  categories,
  regions,
  projectsBanner,
  generalInfo
}) {
  return (
    <div style={{ width: "100vw" }}>
      <Head>
        <title>{projectsBanner.title}</title>
      </Head>
      <Header generalInfo={generalInfo} />
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
  const [products, categories, regions, projectsBanner, generalInfo] =
    await Promise.all([
      fetchAPI("/products"),
      fetchAPI("/categories"),
      fetchAPI("/regions"),
      fetchAPI("/project-banner"),
      fetchAPI("/general")
    ]);

  return {
    props: {
      products,
      categories,
      regions,
      projectsBanner,
      generalInfo
    }
  };
};
export default Projects;
