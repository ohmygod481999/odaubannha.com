import Blog from "../../components/sections/Blog";
import { useRouter } from "next/router";
import { getArticles, countArticle } from "../../services/article.service";
import { usePagination } from "../../utils/hooks/usePagination";
import { createQueryString, formatQueryParams } from "../../utils/common";
import Banner from "../../components/Banner";
import { fetchAPI } from "../../utils/api";
import Head from "next/head";
import Social from "../../components/Social";
import Header from "../../components/Header";
function BlogPage({
  articles,
  _limit,
  _start,
  totalCount,
  blogsBanner,
  generalInfo
}) {
  const router = useRouter();
  const query = router.query;

  const { currentPage, itemPerPage, totalItems } = usePagination(
    _start,
    _limit,
    totalCount
  );

  return (
    <div style={{ width: "100vw" }}>
      <Head>
        <title>{blogsBanner.title}</title>
      </Head>
      <Header generalInfo={generalInfo} />
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
  const [articles, totalCount, blogsBanner, generalInfo] = await Promise.all([
    getArticles(query),
    countArticle(query),
    fetchAPI("/article-banner"),
    fetchAPI("/general")
  ]);
  return {
    props: { articles, _limit, _start, totalCount, blogsBanner, generalInfo }
  };
}
