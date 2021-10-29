import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { getNews } from "../../services/news.service";
import { formatQueryParams } from "../../utils/common";
import { getArticles, countArticle } from "../../services/article.service";
import ArticleListPage from "../../components/ArticleListPage";
import { usePagination } from "../../utils/hooks/usePagination";
import Head from "next/head";
import { getStrapiImage } from "../../utils/medias";

function News({ news, articles, _limit, _start, totalCount }) {
    const { title, image } = news;
    const { currentPage, itemPerPage, totalItems } = usePagination(
        _start,
        _limit,
        totalCount
    );
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta property="og:title" content={title} key="title" />
                <meta property="og:description" content={title} key="description" />
                <meta property="og:image" content={image ? getStrapiImage(image) : "/assets/images/blog_bg.jpg"} key="image" />
            </Head>
            <ArticleListPage
                articles={articles}
                currentPage={currentPage}
                image={image}
                itemPerPage={itemPerPage}
                title={title}
                totalItems={totalCount}
            />
        </>
    );
}

export default News;

export async function getServerSideProps({ params = {}, query = {} }) {
    const news = await getNews();
    const { article_category } = news;

    let articles = [];
    let totalCount = 0;

    const queryParams = {
        ...query,
        _category_id: article_category.id,
    };
    const formatedQueryParams = formatQueryParams(queryParams);
    const { _limit, _start } = formatedQueryParams;

    if (article_category) {
        const [resultArticles, resultTotalCount] = await Promise.all([
            getArticles(formatedQueryParams),
            countArticle(formatedQueryParams),
        ]);
        articles = resultArticles;
        totalCount = resultTotalCount;
    }

    return { props: { news, articles, _limit, _start, totalCount } };
}
