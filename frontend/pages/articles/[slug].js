import Breadcrumb from "../../components/Breadcrumb";
import BlogDetail from "../../components/sections/BlogDetail";
import { useEffect } from "react";
import { getArticles, getArticle } from "../../services/article.service";
import Head from "next/head";
import { getStrapiImage } from "../../utils/medias";
import { fetchAPI } from "../../utils/api";

function DetailBlog({ article = {}, articlesData }) {
  return (
    <div>
      <Head>
        <title>{article.title}</title>
        <meta property="og:title" content={article.title} key="title" />
        <meta
          property="og:description"
          content={article.description}
          key="description"
        />
        <meta
          property="og:image"
          content={
            article.image
              ? getStrapiImage(article.image)
              : "/assets/images/blog_bg.jpg"
          }
          key="image"
        />
      </Head>
      <BlogDetail article={article} articlesData={articlesData} />
    </div>
  );
}

export default DetailBlog;

export async function getServerSideProps({ params }) {
  const [article, articlesData] = await Promise.all([
    getArticle(params.slug),
    fetchAPI("/articles")
  ]);
  return { props: { article, articlesData } };
}
