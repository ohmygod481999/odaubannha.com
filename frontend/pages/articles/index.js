import Breadcrumb from "../../components/Breadcrumb";
import Blog from "../../components/sections/Blog";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { config } from "../../config";
import { getArticles, countArticle } from "../../services/article.service";
import { usePagination } from "../../utils/hooks/usePagination";
import { createQueryString, formatQueryParams } from "../../utils/common";
import Banner from "../../components/Banner";
import { fetchAPI } from "../../utils/api";

function BlogPage({ articles, _limit, _start, totalCount, blogsBanner }) {
  const router = useRouter();
  const query = router.query;

  const { currentPage, itemPerPage, totalItems } = usePagination(
    _start,
    _limit,
    totalCount
  );

  return (
    <div>
      <Banner bannerData={blogsBanner} />
      <Blog
        articles={articles}
        currentPage={currentPage}
        itemPerPage={itemPerPage}
        totalItems={totalItems}
      />
    </div>
  );
}

export default BlogPage;

export async function getServerSideProps({ params = {}, query = {} }) {
  const formatQuery = formatQueryParams(query);
  let { _limit, _start, _category_id } = formatQuery;
  const [articles, totalCount, blogsBanner] = await Promise.all([
    getArticles(query),
    countArticle(query),
    fetchAPI("/article-banner")
  ]);
  return { props: { articles, _limit, _start, totalCount, blogsBanner } };
}
