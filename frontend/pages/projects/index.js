import React from "react";
import Banner from "../../components/Banner";
import ProductsList from "../../components/ProductsList";
import { fetchAPI } from "../../utils/api";

function Projects({ products, categories, regions, projectsBanner }) {
  return (
    <div>
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
